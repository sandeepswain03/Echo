"use client";

import { useAtomValue } from "jotai";
import { screenAtom } from "@/modules/widget/atoms/widget-atoms";
import { WidgetAuthScreen } from "@/modules/widget/ui/screens/widget-auth-screen";

interface Props {
  organizationId: string;
}

export const WidgetView = ({ organizationId }: Props) => {
  const screen = useAtomValue(screenAtom);

  const screenComponents = {
    error: <div>Error</div>,
    loading: <div>Loading</div>,
    auth: <WidgetAuthScreen />,
    voice: <div>Voice</div>,
    inbox: <div>Inbox</div>,
    selection: <div>Selection</div>,
    chat: <div>Chat</div>,
    contact: <div>Contact</div>,
  };
  return (
    <main className="min-h-screen min-w-screen flex h-full w-full flex-col overflow-hidden rounded-xl border bg-muted">
      {screenComponents[screen]}
    </main>
  );
};
