import { StoreType } from "@/interface";
import { useCallback, useEffect } from "react";
interface MarkerProps {
  map: unknown;
  store: StoreType;
}
export default function Marker({ map, store }: MarkerProps) {
  console.log(store);
  const loadKakaoMarker = useCallback(() => {
    if (map && store) {
      // 마커 하나 띄우기
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

      marker.setMap(map);
    }
  }, [map, store]);
  useEffect(() => {
    loadKakaoMarker();
  }, [loadKakaoMarker, map]);
  return <></>;
}
