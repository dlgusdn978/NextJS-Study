import { StoreType } from "@/interface";
import { useEffect } from "react";
interface MarkerProps {
  map: any;
  storeDatas: StoreType[];
}
export default function Markers({ map, storeDatas }: MarkerProps) {
  const loadKakaoMarkers = () => {
    if (map) {
      storeDatas?.map((store) => {
        const imgSrc = store.bizcnd_code_nm
          ? `/images/markers/${store.bizcnd_code_nm}.png`
          : `/images/markers/default.png`;
        const imgSize = new window.kakao.maps.Size(40, 40);
        const imgOption = { offset: new window.kakao.maps.Point(27, 69) };

        const markerImage = new window.kakao.maps.MarkerImage(
          imgSrc,
          imgSize,
          imgOption
        );
        const markerPosition = new window.kakao.maps.LatLng(
          store?.y_dnts,
          store?.x_cnts
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });
        const content = `<div class="infowindow">${store?.upso_nm}</div>`;
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
      });
    }
  };
  useEffect(() => {
    loadKakaoMarkers();
  }, [map]);
  return <></>;
}
