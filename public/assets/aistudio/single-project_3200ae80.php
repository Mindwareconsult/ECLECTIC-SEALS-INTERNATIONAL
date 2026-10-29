<?php
/**
 * Single Project template.
 *
 * The original static site didn't have individual project detail pages —
 * this exists so a Project post never 404s, and shows off the full photo
 * gallery (not just one image) via the shared #project-lightbox.
 *
 * @package Eclectic_Seals
 */

get_header();

while ( have_posts() ) :
	the_post();

	$location    = get_post_meta( get_the_ID(), '_project_location', true );
	$terms       = get_the_terms( get_the_ID(), 'project_category' );
	$cat_name    = ( $terms && ! is_wp_error( $terms ) ) ? $terms[0]->name : '';
	$gallery_ids = array_filter( array_map( 'absint', explode( ',', (string) get_post_meta( get_the_ID(), '_project_gallery', true ) ) ) );

	$gallery_urls = array();
	foreach ( $gallery_ids as $attachment_id ) {
		$url = wp_get_attachment_image_url( $attachment_id, 'large' );
		if ( $url ) {
			$gallery_urls[] = $url;
		}
	}
	$main_img = ! empty( $gallery_urls ) ? $gallery_urls[0] : get_the_post_thumbnail_url( get_the_ID(), 'eclectic-hero' );
	if ( ! $main_img ) {
		$main_img = eclectic_seals_image( 'p1.jpg' );
	}
	$card_title = get_the_title() . ( $location ? ' — ' . $location : '' );

	get_template_part(
		'template-parts/hero/page-hero',
		null,
		array(
			'image'      => '', // Featured image is shown below instead of as a hero background.
			'breadcrumb' => get_the_title(),
			'eyebrow'    => $cat_name ? $cat_name : 'Our Portfolio',
			'title'      => get_the_title(),
			'lead'       => $location,
			'buttons'    => array(
				array( 'label' => 'Discuss Your Project', 'url' => home_url( '/request-quote/' ), 'style' => 'primary' ),
				array( 'label' => 'View All Projects', 'url' => home_url( '/projects/' ), 'style' => 'outline' ),
			),
		)
	);
	?>

<section class="section" id="main"><div class="container split">
    <div class="split-media reveal-left"><img src="<?php echo esc_url( $main_img ); ?>" alt="<?php the_title_attribute(); ?>" loading="lazy"></div>
    <div class="reveal-right">
      <div class="eyebrow">Project Details</div>
      <h2><?php the_title(); ?></h2>
      <div class="entry-content"><?php the_content(); ?></div>
      <div class="spotlight-grid" style="margin:24px 0;">
        <?php if ( $location ) : ?>
        <div class="spotlight-item"><div class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 10.5 12 3l9 7.5M5 9v11h14V9M9 20v-6h6v6"/></svg></div><div><strong>Location</strong><span><?php echo esc_html( $location ); ?></span></div></div>
        <?php endif; ?>
        <?php if ( $cat_name ) : ?>
        <div class="spotlight-item"><div class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16v16H4zM4 9h16M9 9v11"/></svg></div><div><strong>Category</strong><span><?php echo esc_html( $cat_name ); ?></span></div></div>
        <?php endif; ?>
        <?php if ( ! empty( $gallery_urls ) ) : ?>
        <div class="spotlight-item"><div class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7l1.5-3h5L16 7"/><circle cx="12" cy="14" r="3.5"/></svg></div><div><strong>Gallery</strong><span><?php echo (int) count( $gallery_urls ); ?> photos</span></div></div>
        <?php endif; ?>
      </div>
      <?php if ( ! empty( $gallery_urls ) ) : ?>
      <button type="button" class="btn btn-outline-dark" data-gallery='<?php echo esc_attr( wp_json_encode( $gallery_urls ) ); ?>' data-title="<?php echo esc_attr( $card_title ); ?>" style="margin-bottom:14px;">View Full Gallery <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>
      <?php endif; ?>
      <a href="<?php echo esc_url( home_url( '/request-quote/' ) ); ?>" class="btn btn-primary">Discuss Your Project <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
    </div>
  </div></section>

  <?php if ( count( $gallery_urls ) > 1 ) : ?>
  <section class="section section--light"><div class="container">
    <div class="section-head center"><div class="eyebrow" style="justify-content:center;">Gallery</div><h2>All Photos From This Project</h2></div>
    <div class="masonry">
      <?php foreach ( $gallery_urls as $index => $url ) : ?>
      <div class="project-card reveal"><img src="<?php echo esc_url( $url ); ?>" alt="<?php echo esc_attr( get_the_title() ); ?> photo <?php echo (int) ( $index + 1 ); ?>" loading="lazy"></div>
      <?php endforeach; ?>
    </div>
  </div></section>
  <?php endif; ?>

	<?php
endwhile;

get_template_part(
	'template-parts/cta/cta-quote',
	null,
	array(
		'heading' => 'Let&rsquo;s Create Your Next Landmark Project',
		'text'    => 'Whatever the scale, our team is ready to scope it with you.',
	)
);

get_footer();
