/* API Version - 1.3.13 */

/**
 * Instances of this interface represent the selected device slot as shown in the Bitwig Studio user interface.
 *
 * @since Bitwig Studio 1.1.6
 */
function CursorDeviceSlot() {}

CursorDeviceSlot.prototype = new DeviceChain();
CursorDeviceSlot.prototype.constructor = CursorDeviceSlot;

/**
 * @param {string} slot
 */
CursorDeviceSlot.prototype.selectSlot = function(slot) {};
