<?php
/**
 * 404 error template.
 *
 * @package Eclectic_Seals
 */

get_header();
?>
<header class="hero hero--page" id="main" style="min-height:90vh;">
  <div class="hero-bg" style="background-image:url('<?php echo eclectic_seals_image( 'gal9.jpg' ); ?>');"></div>
  <svg class="hero-lines" viewBox="0 0 1400 800" xmlns="http://www.w3.org/2000/svg"><path d="M100 700 L100 500 L400 500 L400 300 L750 300" stroke="#C8A45D" stroke-width="1" fill="none"/><circle cx="750" cy="300" r="5" fill="none" stroke="#C8A45D"/></svg>
  <div class="container hero-content text-center" style="margin:0 auto;">
    <div class="eyebrow" style="justify-content:center; color:#C8A45D;">Error 404</div>
    <h1 style="max-width:900px; margin:0 auto 20px; font-size:clamp(32px,5vw,56px);">Oops! The Page You&rsquo;re Looking For Doesn&rsquo;t Exist.</h1>
    <p class="lead" style="margin:0 auto 40px;">It looks like the page has been moved or no longer exists. Let&rsquo;s get you back on track.</p>
    <div class="btn-group" style="justify-content:center;">
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn btn-primary">Return Home <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      <a href="<?php echo esc_url( home_url( '/services/' ) ); ?>" class="btn btn-outline">View Services</a>
      <a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="btn btn-outline">Contact Us</a>
    </div>
  </div>
</header>
<?php get_footer(); ?>
