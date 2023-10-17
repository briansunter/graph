import React from 'preact/compat';
import { Context } from "./lib/Context";
import renderToString from 'preact-render-to-string';

export const data = {
  title: 'Hello ddworld',
};

export function render(this: Context) {
  return renderToString(<h1>{data.title}- {this.generateRandomIdString("brian")}</h1>);
}