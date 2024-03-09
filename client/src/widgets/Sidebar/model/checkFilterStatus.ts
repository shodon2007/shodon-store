import { FilterType } from "src/shared/api/filterApi";

export default function checkFilterStatus(filters: FilterType, title: string, description: string):boolean {
    return !!filters[title] && filters[title].includes(description);
}