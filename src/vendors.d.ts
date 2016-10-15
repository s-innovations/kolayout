interface KnockoutBindingProvider {
    preprocessNode?: (node: HTMLElement) => void;
}
interface KnockoutBindingHandlers {
    koLayout: KnockoutBindingHandler;

}
