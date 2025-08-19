"use client";

import { useVapi } from "@/modules/widget/hooks/use-vapi";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const {
    isSpeaking,
    isConnected,
    isConnecting,
    transcript,
    startCall,
    endCall,
  } = useVapi();

  return (
    <div className="flex flex-col items-center justify-center min-h-svh max-w-md mx-auto gap-4">
      <div className="flex gap-4">
        <Button onClick={() => startCall()}>Start Call</Button>
        <Button onClick={() => endCall()} variant="destructive">
          End Call
        </Button>
      </div>
      <p>isConnected: {`${isConnected}`}</p>
      <p>isConnecting: {`${isConnecting}`}</p>
      <p>isSpeaking: {`${isSpeaking}`}</p>
      <pre>{JSON.stringify(transcript, null, 2)}</pre>
    </div>
  );
}
