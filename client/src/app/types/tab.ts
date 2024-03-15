import { ReactNode } from 'react';

export interface TabElement {
	name: string;
	component: ReactNode;
}

export type TabElements = Record<string, TabElement>;
