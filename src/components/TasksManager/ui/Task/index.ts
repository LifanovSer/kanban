import { Tasks } from "@/data/dataTypes";

export interface TaskProps {
    id: Tasks["id"];
    number: Tasks["number"];
    title: Tasks["title"];
    column_type: string;
}
