import * as OSM_ROOMS_DATA from '../../assets/overpassOSMRoomsData.json';

import { FacultyLocation } from './RoomLocationApi';

/**
 * Creates an OSM link for the given room if available.
 * @param room name
 * @param facultyLocation location of the faculty the room belongs to
 * @returns OSM link for the room or null if not available
 */
export function createOSMLink(room: string, facultyLocation: FacultyLocation): string | null {
  switch (facultyLocation) {
    case 'WF':
      return createOSMLinkWolfenbuettel(room);
    default:
      break;
  }
  return null;
}

function createOSMLinkWolfenbuettel(room: string): string | null {
  /**
   * Check if we have OSM data for this room in Wolfenbüttel
   * If so, add a link to the OSM way
   * Example: Link: https://osmapp.org/way/123456789
   */
  const osmData = OSM_ROOMS_DATA[room];
  if (osmData) {
    return `https://osmapp.org/way/${osmData.id}`;
  }
  return null;
}
