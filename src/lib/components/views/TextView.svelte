<script lang="ts">
    import { executeBlock } from "$lib/ludi/engine";
    import type { Rules, GameState, View, Context } from "$lib/ludi/types";
    import { parseParts, toSize } from "./utils";

    export let positionStyle: string;
    export let context: Context;
    export let element: View;
    $: variable = element.attributes["data"];

    function click() {
        // TODO Sad to do so much eval here, will need to fix this eventually
        const moveExpression = element.attributes["click"];
        const move = parseAndEvaluateMove(context.rules, context.state, moveExpression, { });

        // TODO use some sort of disabled state instead?
        if (move != null) {
            context.state = executeBlock(context.rules, context.state, move);
        }
    }

    function elementFor(value: any) {
        return element.children.find(child => child.attributes["useFor"] == value);
    }

    $: fontSizeStyle = `font-size: ${toSize(element.attributes["fontSize"])};`
    $: horizontalAlignStyle = `text-align: ${parseParts(element.attributes["align"]).horizontal.toLowerCase()};`
    $: verticalAlignStyle = `vertical-align: ${toVerticalAlignment(parseParts(element.attributes["align"]).vertical)};`

    function toVerticalAlignment(vertical: string) {
        switch (vertical) {
            case "Top":
                return "top";
            case "Center":
                return "middle";
            case "Bottom":
                return "bottom";
        }
    }
</script>

<div style={positionStyle + fontSizeStyle + horizontalAlignStyle}>
    <span style={verticalAlignStyle}>{element.attributes["show"]}</span>
</div>

<style lang="scss">
    div {
        padding: 0;
        margin: 0;
        user-select: none;
        display: table;
    }

    span {
        display: table-cell;
        line-height: normal;
    }
</style>