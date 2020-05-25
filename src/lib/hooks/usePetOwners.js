import useSWR from "swr";
import useClient from "./useClient";

const ENDPOINT = "api/animals";

export default function usePetOwners() {
  const client = useClient();
  const { data, mutate, ...rest } = useSWR(ENDPOINT, client.get);

  const owners = data ? data : [];

  const addOwner = async (owner) => {
    mutate([...owners, owner], false);
    const response = await client.post(ENDPOINT, owner);
    return mutate([...owners, response]);
  };

  return { owners, addOwner, ...rest };
}
