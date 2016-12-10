/* API Version - 1.3.13 */

/**
 * A common base interface for labeled and categorized settings.
 *
 * @since Bitwig Studio 1.1
 */
function Setting() {}

/**
 * Returns the category name of the setting.
 *
 * @return {string} a string value containing the category name
 * @since Bitwig Studio 1.1
 */
Setting.prototype.getCategory = function() {};

/**
 * Returns the label text of the setting.
 *
 * @return {string} a string value containing the label text
 * @since Bitwig Studio 1.1
 */
Setting.prototype.getLabel = function() {};

/**
 * Marks the settings as enabled in Bitwig Studio. By default the setting is enabled.
 *
 * @since Bitwig Studio 1.1
 */
Setting.prototype.enable = function() {};

/**
 * Marks the settings as disabled in Bitwig Studio. By default the setting is enabled.
 *
 * @since Bitwig Studio 1.1
 */
Setting.prototype.disable = function() {};

/**
 * Shows the setting in Bitwig Studio. By default the setting is shown.
 *
 * @since Bitwig Studio 1.1
 */
Setting.prototype.show = function() {};

/**
 * Hides the setting in Bitwig Studio. By default the setting is shown.
 *
 * @since Bitwig Studio 1.1
 */
Setting.prototype.hide = function() {};
