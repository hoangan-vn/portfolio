import React, { useLayoutEffect, useRef } from 'react';
import Graphic from '@arcgis/core/Graphic';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import PictureMarkerSymbol from '@arcgis/core/symbols/PictureMarkerSymbol.js';
import Point from '@arcgis/core/geometry/Point';
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import PopupTemplate from '@arcgis/core/PopupTemplate';

interface MapWidgetProps {
  placeholder: string;
}

const MapWidget: React.FC<MapWidgetProps> = ({ placeholder }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!mapRef?.current) return;
    const map = new Map({
      basemap: 'streets'
    });
    const view = new MapView({
      map: map,
      container: mapRef.current,
      center: [106.67698403739985, 10.821353493741581],
      zoom: 13,
      ui: {
        components: []
      },
      constraints: {
        minZoom: 13,
        maxZoom: 13
      }
    });

    const graphicsLayer = new GraphicsLayer();

    const point = new Point({ longitude: 106.67698403739985, latitude: 10.821353493741581 });

    const pointSymbol = new PictureMarkerSymbol({
      url: placeholder,
      width: '55px',
      height: '55px'
    });

    const name = 'App Title';
    const address = 'App Address';
    const pointAttributes = {
      Name: name,
      Address: address
    };

    const popupTemplate = new PopupTemplate({
      title: '{Name}',
      content: '{Address}'
    });

    const graphicPoint = new Graphic({
      geometry: point,
      symbol: pointSymbol,
      attributes: pointAttributes,
      popupTemplate: popupTemplate
    });

    graphicsLayer.add(graphicPoint);
    view.map.add(graphicsLayer);
    view
      .when(() => {
        const popups = document.querySelectorAll('.esri-popup');
        popups.forEach((popup) => {
          (popup as HTMLElement).style.zIndex = '0';
        });
      })
      .catch((err) => {
        console.error('MapView rejected:', err);
      });

    return () => view && view.destroy();
  }, [placeholder]);

  return <div className='w-[90%] h-full' ref={mapRef}></div>;
};

export default MapWidget;
