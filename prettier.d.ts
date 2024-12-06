declare module 'prettier' {
	interface Options {
		organizeImportsMode?: 'All' | 'SortAndCombine' | 'RemoveUnused';
	}
	interface ParserOptions {
		organizeImportsMode?: 'All' | 'SortAndCombine' | 'RemoveUnused';
	}
}

export {};
