<?php
/**
 * Projects archive — replaces the original /projects.html.
 *
 * @package Eclectic_Seals
 */

get_header();

get_template_part(
	'template-parts/hero/page-hero',
	null,
	array(
		'image'      => 'hero_projects.jpg',
		'breadcrumb' => 'Projects',
		'eyebrow'    => 'Our Portfolio',
		'title'      => 'Every Project Tells A Story Of Excellence',
		'lead'       => 'Explore a collection of carefully executed projects that reflect our commitment to exceptional craftsmanship, innovative thinking, and timeless design. Click any project to browse the full photo gallery.',
		'buttons'    => array(
			array( 'label' => 'View Services', 'url' => home_url( '/services/' ), 'style' => 'primary' ),
			array( 'label' => 'Request Consultation', 'url' => home_url( '/request-quote/' ), 'style' => 'outline' ),
		),
	)
);

$project_categories = get_terms(
	array(
		'taxonomy'   => 'project_category',
		'hide_empty' => false,
	)
);

if ( ! function_exists( 'eclectic_seals_project_gallery_urls_by_title' ) ) :
	/**
	 * Helper: fetch a project by title and return its gallery image URLs.
	 */
	function eclectic_seals_project_gallery_urls_by_title( $title ) {
		$post = get_page_by_title( $title, OBJECT, 'project' );
		if ( ! $post ) {
			return array();
		}
		$ids  = array_filter( array_map( 'absint', explode( ',', (string) get_post_meta( $post->ID, '_project_gallery', true ) ) ) );
		$urls = array();
		foreach ( $ids as $id ) {
			$url = wp_get_attachment_image_url( $id, 'large' );
			if ( $url ) {
				$urls[] = $url;
			}
		}
		return $urls;
	}
endif;
?>

<section class="section" id="main"><div class="container">
  <div class="filter-bar">
    <button class="filter-btn active" data-filter="all">All</button>
    <?php if ( ! is_wp_error( $project_categories ) ) : foreach ( $project_categories as $category ) : ?>
    <button class="filter-btn" data-filter="<?php echo esc_attr( $category->slug ); ?>"><?php echo esc_html( $category->name ); ?></button>
    <?php endforeach; endif; ?>
  </div>

  <div class="grid-3 stagger">
    <?php
    $projects_query = new WP_Query(
			array(
				'post_type'      => 'project',
				'posts_per_page' => -1,
				'orderby'        => 'date',
				'order'          => 'DESC',
			)
		);
		if ( $projects_query->have_posts() ) :
			while ( $projects_query->have_posts() ) :
				$projects_query->the_post();
				get_template_part( 'template-parts/cards/project-card' );
			endwhile;
			wp_reset_postdata();
		else :
			?>
    <p><?php esc_html_e( 'Projects will appear here once added from the WordPress admin.', 'eclectic-seals' ); ?></p>
    <?php endif; ?>
  </div>
</div></section>

<?php
$spotlights = array(
	array(
		'title'       => 'Liberia Embassy Renovation',
		'summary'     => 'A complete renovation of the Republic of Liberia Embassy, taken from its original condition to a refreshed, modern finish.',
		'before'      => 0,
		'after'       => 3,
		'location'    => 'Central Area, Abuja',
		'scope'       => 'Full renovation',
		'client_type' => 'Diplomatic Mission',
	),
	array(
		'title'       => 'Chinese Cultural Center Renovation',
		'summary'     => 'A full renovation of the Chinese Cultural Center, taking the building from its original condition to a refreshed, modern finish.',
		'before'      => 7,
		'after'       => 4,
		'location'    => 'Wuse Zone 5, Abuja',
		'scope'       => 'Full renovation',
		'client_type' => 'Institutional',
	),
);

foreach ( $spotlights as $index => $spotlight ) :
	$gallery = eclectic_seals_project_gallery_urls_by_title( $spotlight['title'] );
	if ( empty( $gallery ) ) {
		continue;
	}
	$before_img = $gallery[ $spotlight['before'] ] ?? $gallery[0];
	$after_img  = $gallery[ $spotlight['after'] ] ?? end( $gallery );
	$section_class = 0 === $index % 2 ? 'section section--light' : 'section';
	?>
<section class="<?php echo esc_attr( $section_class ); ?>"><div class="container">
    <div class="section-head center">
      <div class="eyebrow" style="justify-content:center;">Project Spotlight</div>
      <h2><?php echo esc_html( $spotlight['title'] ); ?></h2>
      <p><?php echo esc_html( $spotlight['summary'] ); ?></p>
    </div>
    <div class="grid-2 reveal">
      <div class="ba-frame"><span class="ba-tag">Before</span><img src="<?php echo esc_url( $before_img ); ?>" alt="<?php echo esc_attr( $spotlight['title'] ); ?> before renovation" loading="lazy"></div>
      <div class="ba-frame"><span class="ba-tag ba-tag--after">After</span><img src="<?php echo esc_url( $after_img ); ?>" alt="<?php echo esc_attr( $spotlight['title'] ); ?> after renovation" loading="lazy"></div>
    </div>
    <div class="spotlight-grid" style="margin:32px 0; max-width:820px; margin-left:auto; margin-right:auto;">
      <div class="spotlight-item"><div class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 10.5 12 3l9 7.5M5 9v11h14V9M9 20v-6h6v6"/></svg></div><div><strong>Location</strong><span><?php echo esc_html( $spotlight['location'] ); ?></span></div></div>
      <div class="spotlight-item"><div class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16v16H4zM4 9h16M9 9v11"/></svg></div><div><strong>Scope</strong><span><?php echo esc_html( $spotlight['scope'] ); ?></span></div></div>
      <div class="spotlight-item"><div class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg></div><div><strong>Client Type</strong><span><?php echo esc_html( $spotlight['client_type'] ); ?></span></div></div>
      <div class="spotlight-item"><div class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7l1.5-3h5L16 7"/><circle cx="12" cy="14" r="3.5"/></svg></div><div><strong>Gallery</strong><span><?php echo (int) count( $gallery ); ?> photos</span></div></div>
    </div>
    <div class="text-center">
      <button type="button" class="btn btn-primary" data-gallery='<?php echo esc_attr( wp_json_encode( $gallery ) ); ?>' data-title="<?php echo esc_attr( $spotlight['title'] . ' — ' . $spotlight['location'] ); ?>">View Full Gallery <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>
    </div>
  </div></section>
<?php endforeach; ?>

<?php
get_template_part(
	'template-parts/cta/cta-quote',
	null,
	array(
		'heading' => 'Let&rsquo;s Create Your Next Landmark Project',
		'text'    => 'Whatever the scale, our team is ready to scope it with you.',
	)
);

get_footer();
