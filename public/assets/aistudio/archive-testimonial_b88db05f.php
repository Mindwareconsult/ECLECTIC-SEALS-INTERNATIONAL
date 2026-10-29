<?php
/**
 * Testimonials archive — replaces the original /testimonials.html.
 *
 * @package Eclectic_Seals
 */

get_header();

get_template_part(
	'template-parts/hero/page-hero',
	null,
	array(
		'image'      => 'hero_testimonials.jpg',
		'breadcrumb' => 'Testimonials',
		'eyebrow'    => 'Client Voices',
		'title'      => 'Trusted By Homeowners, Businesses &amp; Property Investors',
		'lead'       => 'Every project leaves behind a relationship. Here is what our clients say about working with Eclectic Seals Int&rsquo;l.',
		'buttons'    => array(
			array( 'label' => 'Request Quote', 'url' => home_url( '/request-quote/' ), 'style' => 'primary' ),
			array( 'label' => 'View Our Projects', 'url' => home_url( '/projects/' ), 'style' => 'outline' ),
		),
	)
);
?>

<section class="section" id="main"><div class="container">
  <div class="section-head center"><div class="eyebrow" style="justify-content:center;">Reviews</div><h2>Client Experiences</h2></div>
  <div class="testi-grid">
    <?php
    $testimonials_query = new WP_Query(
			array(
				'post_type'      => 'testimonial',
				'posts_per_page' => -1,
				'orderby'        => 'date',
				'order'          => 'DESC',
			)
		);
		if ( $testimonials_query->have_posts() ) :
			while ( $testimonials_query->have_posts() ) :
				$testimonials_query->the_post();
				get_template_part( 'template-parts/testimonials/testimonial-card' );
			endwhile;
			wp_reset_postdata();
		else :
			?>
    <p><?php esc_html_e( 'Testimonials will appear here once added from the WordPress admin.', 'eclectic-seals' ); ?></p>
    <?php endif; ?>
  </div>
</div></section>

<section class="section section--dark"><div class="container">
  <div class="section-head center"><div class="eyebrow" style="justify-content:center;">On Camera</div><h2>Video Testimonials</h2></div>
  <div class="grid-3 stagger">
    <?php
    $videos = array(
			array( 'p1.jpg', 'A Villa Renovation, Told By The Homeowner', '2:14' ),
			array( 'p2.jpg', 'Delivering A Corporate Fit-Out On Deadline', '1:48' ),
			array( 'p5.jpg', 'Building A Commercial Development From The Ground Up', '3:02' ),
		);
		foreach ( $videos as $video ) :
		?>
    <div class="project-card reveal"><img src="<?php echo eclectic_seals_image( $video[0] ); ?>" alt="<?php echo esc_attr( $video[1] ); ?>" loading="lazy">
      <div class="project-info" style="transform:translateY(0);">
        <div style="width:56px; height:56px; border-radius:50%; background:rgba(255,255,255,0.15); border:1.5px solid var(--gold); display:flex; align-items:center; justify-content:center; margin-bottom:14px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="var(--gold)"><path d="M8 5v14l11-7z"/></svg></div>
        <h3 style="font-size:17px;"><?php echo esc_html( $video[1] ); ?></h3>
        <div class="loc"><?php echo esc_html( $video[2] ); ?></div>
      </div>
    </div>
    <?php endforeach; ?>
  </div>
</div></section>

<section class="section"><div class="container">
  <div class="section-head center"><div class="eyebrow" style="justify-content:center;">Trusted By</div><h2>Corporate Clients</h2></div>
  <div class="grid-6" style="align-items:center;">
    <?php for ( $i = 1; $i <= 6; $i++ ) : ?>
    <div class="text-center" style="opacity:0.55; filter:grayscale(1); transition:all 0.3s;" onmouseover="this.style.opacity=1;this.style.filter='none'" onmouseout="this.style.opacity=0.55;this.style.filter='grayscale(1)'"><div style="font-family:var(--font-display); font-weight:700; font-size:18px; color:var(--navy); border:1px solid #e5e7eb; border-radius:12px; padding:18px 10px;">Client <?php echo (int) $i; ?></div></div>
    <?php endfor; ?>
  </div>
</div></section>

<?php
get_template_part(
	'template-parts/cta/cta-quote',
	null,
	array(
		'heading' => 'Become Our Next Success Story',
		'text'    => 'Tell us about your project and join the clients above.',
	)
);

get_footer();
