import { db } from "@/lib/firebase-config";
import {
  setDevelopers,
  setFetchingDevelopers,
} from "@/redux/reducers/developer-reducer";
import type { Developer } from "@/types/developer-model";
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { useDispatch } from "react-redux";

interface Props {
  order: string;
}

export default function useDeveloperHooks(props: Props) {
  // props
  const { order } = props;

  // hooks
  const dispatch = useDispatch();

  const usersCollectionRef = collection(db, "developers");

  const fetchDevelopersDocs = async () => {
    const q = query(
      usersCollectionRef,
      orderBy("name", order as "asc" | "desc"),
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  const fetchDevelopersData = () => {
    dispatch(setFetchingDevelopers(true));

    fetchDevelopersDocs().then((res) => {
      dispatch(setFetchingDevelopers(false));
      dispatch(setDevelopers(res as Developer[]));
    });
  };

  const updateDeveloper = async (developer: Developer) => {
    const { id, ...rest } = developer;
    const developerDoc = doc(db, "developers", id);
    await updateDoc(developerDoc, { ...rest });
    fetchDevelopersData();
  };

  return { setFetchingDevelopers, fetchDevelopersData, updateDeveloper };
}
