import type { LayoutServerLoad } from './$types';

export const ssr = false;
export const csr = true;
export const prerender = false;

export const load = (async () => {
    return {};
}) satisfies LayoutServerLoad;