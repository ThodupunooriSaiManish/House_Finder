import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Property } from "@/types";
import { MapPin } from "lucide-react";

interface PropertyMapProps {
  properties: Property[];
}

export default function PropertyMap({ properties }: PropertyMapProps) {
  return (
    <Card className="sticky top-4 h-[calc(100vh-6rem)]" style={{ minHeight: '500px' }}>
      <CardHeader className="pb-2 border-b">
        <CardTitle className="text-base font-medium">Property Map</CardTitle>
      </CardHeader>
      <CardContent className="h-full bg-gray-100 dark:bg-gray-700 p-4 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-12 w-12 mx-auto mb-2 text-gray-400" />
          <p className="text-gray-500 dark:text-gray-400">
            Interactive map with property locations would appear here, powered by Google Maps API.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
            Properties would be shown as interactive pins that highlight on hover.
          </p>
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {properties.length} properties shown on map
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
