<script lang="ts">
    import type { View, Context } from "$lib/ludi/types";
    import { parseParts, toSize } from "./utils";

    export let positionStyle: string;
    export let context: Context;
    export let element: View;

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