import { useState } from "react";
import Map from "@/component/Map";
import Markers from "@/component/Markers";
import * as stores from "../data/store_data.json";
export default function Home() {
  const [map, setMap] = useState(null);
  const storeDatas = stores["DATA"];
  return (
    <>
      <Map setMap={setMap} />
      <Markers storeDatas={storeDatas} map={map} />
    </>
  );
}
