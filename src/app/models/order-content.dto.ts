export class OrderContentDTO{
    id: number;
    order: number;
    item: number;
    name: string;
    quantity: number;
    other_notes?: string;
    self_filled: boolean = false;
}