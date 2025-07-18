
import { createClient, LiveObject } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey: "{% LIVEBLOCKS_PUBLIC_KEY %}",
});

type Presence = {};

// Storage types
type Storage = {};

type UserMeta = {};
type RoomEvent = {};

export const {
  suspense: {
    RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useSelf,
    useOthers,
    useOthersMapped,
    useOthersConnectionIds,
    useOther,
    useBroadcastEvent,
    useEventListener,
    useErrorListener,
    useStorage,
    useHistory,
    useUndo,
    useRedo,
    useCanUndo,
    useCanRedo,
    useMutation,
  },
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent>(client);
