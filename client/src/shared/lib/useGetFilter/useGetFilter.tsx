import { useQuery } from "@tanstack/react-query";
import filterApi from "src/shared/api/filterApi";

const useGetFilter = (type: string) => {
  const query = useQuery({
    queryKey: ["filter", type],
    queryFn: async () => {
      const res = await filterApi.getFilter(type);
      return res.data;
    },
  });

  return query;
};

export { useGetFilter };
