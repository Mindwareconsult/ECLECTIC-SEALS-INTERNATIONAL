<?php
/**
 * The blog index template (used as the "Posts page" — set this under
 * Settings → Reading once the front page is set to a static page).
 *
 * @package Eclectic_Seals
 */

get_header();

get_template_part(
	'template-parts/hero/page-hero',
	null,
	array(
		'image'      => 'proj15.jpg',
		'breadcrumb' => 'Blog',
		'eyebrow'    => 'Updates',
		'title'      => 'Latest From Eclectic Seals Int&rsquo;l',
		'lead'       => 'Project milestones, completed work, new services, and behind-the-scenes moments from our team &mdash; updated regularly.',
		'buttons'    => array(
			array( 'label' => 'Request a Quote', 'url' => home_url( '/request-quote/' ), 'style' => 'primary' ),
			array( 'label' => 'Contact Us', 'url' => home_url( '/contact/' ), 'style' => 'outline' ),
		),
	)
);
?>

<section class="section" id="main"><div class="container">
    <div class="faq-search-wrap faq-search-wrap--light" style="max-width:520px; margin:0 0 32px;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg><input type="text" id="blog-search" placeholder="Search updates..." aria-label="Search updates">
    </div>
    <div class="filter-bar" id="blog-filters"><button class="filter-btn active" data-filter="all">All</button></div>
    <div class="blog-feed">
      <?php if ( have_posts() ) : ?>
        <?php while ( have_posts() ) : the_post(); ?>
          <?php get_template_part( 'template-parts/blog/post-card' ); ?>
        <?php endwhile; ?>
      <?php else : ?>
        <p style="color:#8a9099;">No updates yet &mdash; check back soon.</p>
      <?php endif; ?>
    </div>

    <?php the_posts_pagination( array( 'mid_size' => 1 ) ); ?>
  </div></section>

<section class="section"><div class="container">
    <div class="form-card" style="max-width:640px; margin:0 auto; text-align:center;">
      <h2 style="font-size:26px;">Never Miss An Update</h2>
      <p style="color:#5b6370;">Get project milestones and news from Eclectic Seals Int&rsquo;l straight to your inbox.</p>
      <form class="newsletter-form" method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" style="display:flex; gap:12px; margin-top:20px; flex-wrap:wrap;">
        <input type="hidden" name="action" value="eclectic_seals_newsletter">
        <input type="text" name="newsletter_name" placeholder="Full name" required style="flex:1; min-width:160px; padding:14px 18px; border-radius:12px; border:1.5px solid #e2e5ea;">
        <input type="email" name="newsletter_email" placeholder="Email address" required style="flex:1; min-width:160px; padding:14px 18px; border-radius:12px; border:1.5px solid #e2e5ea;">
        <button type="submit" class="btn btn-primary">Subscribe</button>
      </form>
      <?php if ( isset( $_GET['newsletter'] ) && 'success' === $_GET['newsletter'] ) : ?>
      <p class="nl-msg" style="color:var(--success); margin-top:14px;">Thanks — you&rsquo;re on the list!</p>
      <?php endif; ?>
    </div>
  </div></section>

<?php get_footer(); ?>
