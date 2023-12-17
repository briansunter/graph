import { getFiles } from "../../lib/fileProcessor";
import { Page } from "../pages/+onBeforeRender";
import { DateTime } from "luxon";

export async function getPagesWithTag(tag: string) {
    const files = await getFiles();
    const pagesWithTag = Object.values(files)
    .filter((file: Page) => file.props.tags && file.props.tags.includes(tag))
    .sort((a: Page, b: Page) => DateTime.fromISO(b.props.date).toMillis() - DateTime.fromISO(a.props.date).toMillis());

    return pagesWithTag;
}