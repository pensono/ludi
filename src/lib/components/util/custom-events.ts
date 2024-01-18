/** Dispatch event on click outside of node */
export function clickoutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
        if (node && !node.contains(event?.target as Node) && !event.defaultPrevented) {
            node.dispatchEvent(new CustomEvent('clickoutside'))
        }
    }

    document.addEventListener('click', handleClick, true);

    return {
        destroy() {
            document.removeEventListener('click', handleClick, true);
        }
    }
}

/** Dispatch event any time the document is clicked */
export function clickanywhere(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
        node.dispatchEvent(new CustomEvent('clickanywhere'))
    }

    document.addEventListener('click', handleClick, true);

    return {
        destroy() {
            document.removeEventListener('click', handleClick, true);
        }
    }
}