import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemsAction } from "../store/ItemsSlice";
import { fetchStatusAction } from "../store/fetchStatusSlice";

function FetchItem() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusAction.markfetingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusAction.markfetchDone());
        dispatch(fetchStatusAction.markfetchingDone());
        dispatch(ItemsAction.addInitItems(items));
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
}

export default FetchItem;
