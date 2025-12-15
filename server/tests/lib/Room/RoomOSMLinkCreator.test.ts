// Mock OSM data
jest.mock('../../../assets/overpassOSMRoomsData.json', () => ({
  "WF-EX-2/252": { id: 123456789, level: "2" },
  "WF-EX-3/101": { id: 987654321, level: "1" },
  "A068": { id: 123456789, level: "0" }
}), { virtual: true });

describe('RoomOSMLinkCreator', () => {
  describe('WF', () => {
    it('should return correct OSM link for WF-EX-2/252 in WF faculty', () => {
      const { createOSMLink } = require("../../../lib/Room/RoomOSMLinkCreator");
      const link = createOSMLink('WF-EX-2/252', 'WF');
      expect(link).toBe('https://osmapp.org/way/123456789');
    });

    it('should return correct OSM link for WF-EX-3/101 in WF faculty', () => {
      const { createOSMLink } = require("../../../lib/Room/RoomOSMLinkCreator");
      const link = createOSMLink('WF-EX-3/101', 'WF');
      expect(link).toBe('https://osmapp.org/way/987654321');
    });

    it('should return correct OSM link for A068 in WF faculty', () => {
      const { createOSMLink } = require("../../../lib/Room/RoomOSMLinkCreator");
      const link = createOSMLink('A068', 'WF');
      expect(link).toBe('https://osmapp.org/way/123456789');
    });

    it('should return null for unknown room in WF faculty', () => {
      const { createOSMLink } = require("../../../lib/Room/RoomOSMLinkCreator");
      const link = createOSMLink('UNKNOWN_ROOM', 'WF');
      expect(link).toBeNull();
    });
  })
});