/* API Version - 1.3.13 */

/**
 * This interface is used to store custom controller settings into the Bitwig Studio preferences.
 * The settings are shown to the user in the controller preferences dialog of Bitwig Studio.
 *
 * @since Bitwig Studio 1.1
 */
function Preferences() {}

Preferences.prototype = new Settings();
Preferences.prototype.constructor = Preferences;
