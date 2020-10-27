export interface Todo {
    todo: string;
	done: boolean;
}

export interface TodoId extends Todo {
	id: string;
}
