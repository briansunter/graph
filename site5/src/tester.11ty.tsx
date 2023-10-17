import h from 'vhtml';
import { Context } from "./Context";

export const data = {
  title: 'Hello world',
};

export function render(this: Context) {
  return <h1>{data.title}- {this.generateRandomIdString("brian")}</h1>;
}
