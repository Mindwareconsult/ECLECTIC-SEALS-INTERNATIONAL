<?php
/**
 * Search results template.
 *
 * @package Eclectic_Seals
 */

get_header();
?>
<header class="hero hero--page" style="min-height:40vh;">
  <div class="container hero-content">
    <div class="breadcrumb"><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a> <span>/</span> <span>Search</span></div>
    <div class="eyebrow" style="color:#F5810D;">Search Results</div>
    <h1><?php printf( 'Results For &ldquo;%s&rdquo;', esc_html( get_search_query() ) ); ?></h1>
  </div>
</header>

<section class="section" id="main"><div class="container">
  <?php if ( have_posts() ) : ?>
    <div class="blog-feed">
      <?php while ( have_posts() ) : the_post(); ?>
        <?php get_template_part( 'template-parts/blog/post-card' ); ?>
      <?php endwhile; ?>
    </div>
    <?php the_posts_pagination( array( 'mid_size' => 1 ) ); ?>
  <?php else : ?>
    <div class="section-head center">
      <h2>No Results Found</h2>
      <p class="lead">Try a different search term, or browse our services and projects instead.</p>
      <div class="btn-group" style="justify-content:center;">
        <a href="<?php echo esc_url( home_url( '/services/' ) ); ?>" class="btn btn-primary">View Services</a>
        <a href="<?php echo esc_url( home_url( '/projects/' ) ); ?>" class="btn btn-outline-dark">View Projects</a>
      </div>
    </div>
  <?php endif; ?>
</div></section>
<?php get_footer(); ?>
