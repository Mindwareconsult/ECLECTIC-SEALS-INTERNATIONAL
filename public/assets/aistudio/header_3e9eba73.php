<?php
/**
 * The header for the theme: <head>, opening <body>, site nav + mobile menu.
 *
 * @package Eclectic_Seals
 */
?><!DOCTYPE html>
<html lang="<?php language_attributes(); ?>">
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<?php if ( is_singular() ) : ?>
<meta name="keywords" content="construction company Abuja, interior design Nigeria, luxury renovation Abuja, real estate property management">
<?php endif; ?>
<link rel="canonical" href="<?php echo esc_url( ( is_front_page() ) ? home_url( '/' ) : get_permalink() ); ?>">
<meta name="robots" content="index, follow">
<meta property="og:type" content="<?php echo is_singular() ? 'article' : 'website'; ?>">
<meta property="og:title" content="<?php echo esc_attr( wp_get_document_title() ); ?>">
<meta property="og:url" content="<?php echo esc_url( ( is_front_page() ) ? home_url( '/' ) : get_permalink() ); ?>">
<meta property="og:site_name" content="<?php bloginfo( 'name' ); ?>">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="<?php echo esc_attr( wp_get_document_title() ); ?>">
<?php if ( has_custom_logo() ) :
	$logo_id  = get_theme_mod( 'custom_logo' );
	$logo_url = wp_get_attachment_image_url( $logo_id, 'full' );
	if ( $logo_url ) : ?>
<link rel="icon" type="image/png" href="<?php echo esc_url( $logo_url ); ?>">
<?php endif; else : ?>
<link rel="icon" type="image/png" href="<?php echo eclectic_seals_image( 'logo-icon.png' ); ?>">
<?php endif; ?>
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<nav class="site-nav">
  <div class="container nav-inner">
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="brand">
      <?php if ( has_custom_logo() ) : ?>
        <?php the_custom_logo(); ?>
      <?php else : ?>
        <img class="seal-mark" src="<?php echo eclectic_seals_image( 'logo-icon.png' ); ?>" alt="<?php bloginfo( 'name' ); ?> logo mark" loading="lazy">
      <?php endif; ?>
      <?php echo eclectic_seals_brand_name(); ?>
    </a>

    <?php if ( has_nav_menu( 'primary' ) ) : ?>
      <div class="nav-links">
        <?php
        wp_nav_menu(
			array(
				'theme_location' => 'primary',
				'container'      => false,
				'items_wrap'     => '%3$s',
				'walker'         => new Eclectic_Seals_Nav_Walker(),
			)
		);
		?>
      </div>
    <?php else : ?>
      <?php eclectic_seals_primary_menu_fallback(); ?>
    <?php endif; ?>

    <div class="nav-cta">
      <button class="dark-toggle" aria-label="Toggle dark mode"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg></button>
      <a href="<?php echo esc_url( home_url( '/request-quote/' ) ); ?>" class="btn btn-primary btn-sm">Request Quote</a>
      <button class="mobile-toggle" aria-label="Open menu"><span></span></button>
    </div>
  </div>
</nav>

<div class="mobile-menu">
  <?php if ( has_nav_menu( 'mobile' ) ) : ?>
    <?php
    wp_nav_menu(
		array(
			'theme_location' => 'mobile',
			'container'      => false,
			'items_wrap'     => '%3$s',
		)
	);
	?>
  <?php else : ?>
    <?php eclectic_seals_mobile_menu_fallback(); ?>
  <?php endif; ?>
</div>
