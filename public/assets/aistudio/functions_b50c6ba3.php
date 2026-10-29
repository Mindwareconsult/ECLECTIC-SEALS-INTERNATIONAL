<?php
/**
 * Eclectic Seals theme bootstrap.
 *
 * Loads every module in inc/ and defines a couple of theme-wide constants
 * used throughout the templates.
 *
 * @package Eclectic_Seals
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

define( 'ECLECTIC_SEALS_VERSION', '1.0.0' );
define( 'ECLECTIC_SEALS_DIR', get_template_directory() );
define( 'ECLECTIC_SEALS_URI', get_template_directory_uri() );

$eclectic_seals_includes = array(
	'/inc/theme-support.php',   // add_theme_support(), content width.
	'/inc/enqueue.php',         // Styles + scripts.
	'/inc/menus.php',           // Nav menu locations.
	'/inc/widgets.php',         // Sidebar / footer widget areas.
	'/inc/customizer.php',      // Customizer: contact info, socials.
	'/inc/cleanup.php',         // <head> bloat removal, performance tweaks.
	'/inc/security.php',        // Light hardening.
	'/inc/helpers.php',         // Shared template helper functions.
	'/inc/cpt.php',             // Project + Testimonial custom post types.
	'/inc/seed-content.php',    // One-time demo content import on activation.
	'/inc/forms.php',           // Contact + Quote request form handling.
);

foreach ( $eclectic_seals_includes as $file ) {
	$path = ECLECTIC_SEALS_DIR . $file;
	if ( is_readable( $path ) ) {
		require_once $path;
	}
}
