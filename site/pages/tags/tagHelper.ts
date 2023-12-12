import { getFiles } from "../../lib/fileProcessor";
import { Page } from "../pages/+onBeforeRender";

export async function getPagesWithTag(tag: string) {
    const files = await getFiles();
    const pagesWithTag = Object.values(files).filter((file: Page) => {
        return file.props.tags && file.props.tags.includes(tag);
    });

    return pagesWithTag;
}