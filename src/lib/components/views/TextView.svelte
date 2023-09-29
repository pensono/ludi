<script lang="ts">
	import { parseAndEvaluateMove, playMove } from "$lib/ludi/engine";
	import type { Game, GameState, View } from "$lib/ludi/types";
	import vars from "../util/vars";
	import { parseParts } from "./utils";

    export let positionStyle: string;
    export let game: Game;
    export let state: GameState;
    export let element: View;
    $: variable = element.attributes["data"];
    $: data = state.variables[variable];

    function click() {
        // TODO Sad to do so much eval here, will need to fix this eventually
        const moveExpression = element.attributes["click"];
        const move = parseAndEvaluateMove(game, state, moveExpression, { });

        // TODO use some sort of disabled state instead?
        if (move != null) {
            state = playMove(game, state, move);
        }
    }

    function elementFor(value: any) {
        return element.children.find(child => child.attributes["useFor"] == value);
    }

    $: fontSizeStyle = `font-size: ${toFontSize(element.attributes["fontSize"])};`
    $: horizontalAlignStyle = `text-align: ${parseParts(element.attributes["align"]).horizontal.toLowerCase()};`
    $: verticalAlignStyle = `vertical-align: ${toVerticalAlignment(parseParts(element.attributes["align"]).vertical)};`

    function toFontSize(size: string | undefined) {
        if (!size) {
            return "1rem";
        }

        if (size.endsWith("pt")) {
            var sizePt = parseInt(size.substring(0, size.length - 2))
            return `${sizePt / 8}rem`;
        }

        return "1rem";
    }


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

<p style={positionStyle + fontSizeStyle + horizontalAlignStyle}>
    <span style={verticalAlignStyle}>{element.attributes["show"]}</span>
</p>

<style lang="scss">
    p {
        padding: 0;
        margin: 0;
        user-select: none;
    }

    span {
        display: inline-block;
        line-height: normal;
    }
</style>