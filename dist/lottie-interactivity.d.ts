/**
 * LottieFiles interactivity for Lottie
 */
export class LottieInteractivity {
    constructor({ actions, container, mode, player, ...options }: {
        [x: string]: any;
        actions: any;
        container: any;
        mode: any;
        player: any;
    });
    enteredPlayer: any;
    player: any;
    loadedAnimation: string;
    attachedListeners: boolean;
    container: any;
    mode: any;
    actions: any;
    options: {
        [x: string]: any;
    };
    assignedSegment: any;
    scrolledAndPlayed: boolean;
    interactionIdx: number;
    oldInterctionIdx: number;
    clickCounter: number;
    playCounter: number;
    stateHandler: Map<any, any>;
    transitionHandler: Map<any, any>;
    getContainerVisibility(): number;
    getContainerCursorPosition(cursorX: any, cursorY: any): {
        x: number;
        y: number;
    };
    initScrollMode(): void;
    initCursorMode(): void;
    initChainMode(): void;
    start(): void;
    redefineOptions({ actions, container, mode, player, ...options }: {
        [x: string]: any;
        actions: any;
        container: any;
        mode: any;
        player: any;
    }): void;
    holdStatus: boolean;
    stop(): void;
    jumpToInteraction: (index: any) => void;
    nextInteraction: (incrementIndex?: boolean) => void;
    #private;
}
export function create(options: any): LottieInteractivity;
export default create;
//# sourceMappingURL=lottie-interactivity.d.ts.map