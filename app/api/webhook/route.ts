import {
    ParseWebhookEvent,
    parseWebhookEvent,
    verifyAppKeyWithNeynar,
  } from "@farcaster/miniapp-node";
  import { NextRequest } from "next/server";
  import {
    deleteUserNotificationDetails,
    setUserNotificationDetails,
  } from "@/lib/kv";
  import { sendFrameNotification } from "@/lib/notifs";
  import { successResponse, errorResponse, serverErrorResponse } from "@/lib/api-helpers";
  
  export async function POST(request: NextRequest) {
    try {
      const requestJson = await request.json();
    
      let data;
      try {
        data = await parseWebhookEvent(requestJson, verifyAppKeyWithNeynar);
      } catch (e: unknown) {
        const error = e as ParseWebhookEvent.ErrorType;
    
        switch (error.name) {
          case "VerifyJsonFarcasterSignature.InvalidDataError":
          case "VerifyJsonFarcasterSignature.InvalidEventDataError":
            // The request data is invalid
            return errorResponse(error.message, 400);
          case "VerifyJsonFarcasterSignature.InvalidAppKeyError":
            // The app key is invalid
            return errorResponse(error.message, 401);
          case "VerifyJsonFarcasterSignature.VerifyAppKeyError":
            // Internal error verifying the app key (caller may want to try again)
            return serverErrorResponse(error.message);
        }
      }
    
      const fid = data.fid;
      const event = data.event;
    
      switch (event.event) {
        case "frame_added":
          if (event.notificationDetails) {
            await setUserNotificationDetails(fid, event.notificationDetails);
            await sendFrameNotification({
              fid,
              title: "Welcome to Frames v2",
              body: "Frame is now added to your client",
            });
          } else {
            await deleteUserNotificationDetails(fid);
          }
    
          break;
        case "frame_removed":
          await deleteUserNotificationDetails(fid);
    
          break;
        case "notifications_enabled":
          await setUserNotificationDetails(fid, event.notificationDetails);
          await sendFrameNotification({
            fid,
            title: "Ding ding ding",
            body: "Notifications are now enabled",
          });
    
          break;
        case "notifications_disabled":
          await deleteUserNotificationDetails(fid);
    
          break;
      }
    
      return successResponse({ processed: true });
    } catch (error) {
      console.error("Webhook error:", error);
      return serverErrorResponse(
        "Failed to process webhook",
        error instanceof Error ? { message: error.message } : undefined
      );
    }
  }