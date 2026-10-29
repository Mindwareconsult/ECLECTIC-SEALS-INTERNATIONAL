<?php
/**
 * Single blog post template.
 *
 * @package Eclectic_Seals
 */

get_header();

while ( have_posts() ) :
	the_post();

	$categories = get_the_category();
	$cat_name   = ! empty( $categories ) ? $categories[0]->name : '';

	get_template_part(
		'template-parts/hero/page-hero',
		null,
		array(
			'image'      => '',
			'min_height' => '40vh',
			'breadcrumb' => get_the_title(),
			'eyebrow'    => $cat_name ? $cat_name : 'Blog',
			'title'      => get_the_title(),
			'lead'       => get_the_date( 'j F Y' ),
		)
	);
	?>

<section class="section" id="main"><div class="container" style="max-width:820px;">
    <article class="blog-post" style="box-shadow:none; padding:0;">
      <?php if ( has_post_thumbnail() ) : ?>
      <div style="border-radius:var(--radius-lg); overflow:hidden; margin-bottom:28px; box-shadow:var(--shadow-soft);">
        <?php the_post_thumbnail( 'eclectic-hero', array( 'style' => 'width:100%; height:auto; display:block;' ) ); ?>
      </div>
      <?php endif; ?>

      <div class="entry-content" style="font-size:16px; line-height:1.8; color:#3a3f47;">
        <?php the_content(); ?>
      </div>

      <?php get_template_part( 'template-parts/blog/media-grid' ); ?>
    </article>

    <div style="margin-top:40px; padding-top:24px; border-top:1px solid #e5e7eb;">
      <a href="<?php echo esc_url( home_url( '/blog/' ) ); ?>" class="btn btn-outline-dark">&larr; Back To All Updates</a>
    </div>
  </div></section>

	<?php
endwhile;

get_template_part(
	'template-parts/cta/cta-quote',
	null,
	array(
		'heading' => 'Ready To Start Your Own Project?',
		'text'    => 'Tell us what you have in mind and we&rsquo;ll take it from there.',
	)
);

get_footer();
