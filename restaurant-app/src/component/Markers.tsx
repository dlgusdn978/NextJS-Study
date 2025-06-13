import { StoreType } from "@/interface";
import { Dispatch, SetStateAction, useCallback, useEffect } from "react";
interface MarkerProps {
  map: unknown;
  stores: StoreType[];
  setCurrentStore: Dispatch<SetStateAction<any>>;
}
export default function Markers({ map, stores, setCurrentStore }: MarkerProps) {
  console.log(stores);
  const loadKakaoMarkers = useCallback(() => {
    if (map) {
      stores?.map((store) => {
        const imgSrc = store.category
          ? `/images/markers/${store.category}.png`
          : `/images/markers/default.png`;
        const imgSize = new window.kakao.maps.Size(40, 40);
        const imgOption = { offset: new window.kakao.maps.Point(27, 69) };

        const markerImage = new window.kakao.maps.MarkerImage(
          imgSrc,
          imgSize,
          imgOption
        );
        const markerPosition = new window.kakao.maps.LatLng(
          store?.lat,
          store?.lng
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });
        const content = `<div class="infowindow">${store?.name}</div>`;
        const customOverlay = new window.kakao.maps.CustomOverlay({
          position: markerPosition,
          content: content,
          xAnchor: 0.6,
          yAnchor: 0.91,
        });

        window.kakao.maps.event.addListener(marker, "mouseover", function () {
          customOverlay.setMap(map);
        });
        window.kakao.maps.event.addListener(marker, "mouseout", function () {
          customOverlay.setMap(null);
        });
        window.kakao.maps.event.addListener(marker, "click", function () {
          setCurrentStore(store);
        });
        marker.setMap(map);
      });
    }
  }, [map, setCurrentStore, stores]);
  useEffect(() => {
    loadKakaoMarkers();
  }, [map]);
  return <></>;
}
