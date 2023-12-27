<script lang="ts">
    // https://www.codelantis.com/blog/sveltekit-monaco-editor
    // https://dev.to/lawrencecchen/monaco-editor-svelte-kit-572

    import type monaco from 'monaco-editor';
    import { onMount } from 'svelte';
    import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
    import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
    import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
    import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
    import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

    export let value: string;

    let divEl: HTMLDivElement;
    let editor: monaco.editor.IStandaloneCodeEditor;

    onMount(async () => {
        self.MonacoEnvironment = {
            getWorker: function (_moduleId: any, label: string) {
                if (label === 'json') {
                    return new jsonWorker();
                }
                if (label === 'css' || label === 'scss' || label === 'less') {
                    return new cssWorker();
                }
                if (label === 'html' || label === 'handlebars' || label === 'razor') {
                    return new htmlWorker();
                }
                if (label === 'typescript' || label === 'javascript') {
                    return new tsWorker();
                }
                return new editorWorker();
            }
        };

        // Only import on the client side
        let monaco = await import('monaco-editor');
        editor = monaco.editor.create(divEl, {
            value,
            language: 'ludi'
        });

        console.log("created", divEl)
    });
</script>

<div bind:this={divEl} />

<style lang="scss">
    div {
        width: 100%;
        height: 100%;
    }
</style>