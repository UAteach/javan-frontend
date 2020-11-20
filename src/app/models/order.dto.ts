import { UserDTO } from './user.dto';

export class OrderDTO{
    id: number;
    members: UserDTO[];
    bin_number: number;
    status: string;
    trell_id: string;
    expected_pickup_datetime: string;
    actual_pickup_datetime: string;
    expected_return_datetime: string;
    actual_return_datetime: string;
    other_notes: string;
    master_teacher: number;
}