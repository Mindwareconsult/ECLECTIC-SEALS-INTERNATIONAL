<?php
/**
 * Single Testimonial template — simple fallback so an individual
 * testimonial post never 404s if linked to directly.
 *
 * @package Eclectic_Seals
 */

get_header();
?>
<section class="section" id="main"><div class="container" style="max-width:700px;">
<?php
while ( have_posts() ) :
	the_post();
	get_template_part( 'template-parts/testimonials/testimonial-card' );
endwhile;
?>
<div class="text-center" style="margin-top:32px;"><a href="<?php echo esc_url( home_url( '/testimonials/' ) ); ?>" class="btn btn-outline-dark">View All Testimonials</a></div>
</div></section>
<?php get_footer(); ?>
