<?php
/**
 * Template Name: Terms & Conditions Page
 * Template Post Type: page
 *
 * @package Eclectic_Seals
 */

get_header();

get_template_part(
	'template-parts/hero/page-hero',
	null,
	array(
		'image'      => 'hero_about.jpg',
		'min_height' => '44vh',
		'breadcrumb' => 'Terms & Conditions',
		'title'      => 'Terms &amp; Conditions',
	)
);
?>

<section class="section" style="padding-top:60px;"><div class="container" style="max-width:860px;">

  <?php if ( have_posts() ) : the_post(); ?>
    <?php if ( get_the_content() ) : ?>
      <div class="entry-content"><?php the_content(); ?></div>
    <?php endif; ?>
    <?php rewind_posts(); ?>
  <?php endif; ?>

  <?php
  $sections = array(
		array( 'Website Usage', "This website is provided for the purpose of informing visitors about " . get_bloginfo( 'name' ) . "'s services and facilitating enquiries. You agree to use this website lawfully and not to misuse its content." ),
		array( 'Intellectual Property', 'All content on this website, including text, images, logos and designs, is the property of ' . get_bloginfo( 'name' ) . ' unless otherwise stated, and may not be reproduced without written permission.' ),
		array( 'Service Enquiries', 'Submitting a contact form or quotation request does not constitute a binding contract. Project engagements are formalised through a separate written agreement.' ),
		array( 'Quotations', 'Quotations provided are estimates based on information available at the time and are subject to change following a full site assessment.' ),
		array( 'Limitation of Liability', get_bloginfo( 'name' ) . ' is not liable for any indirect or consequential loss arising from the use of this website or reliance on its general content.' ),
		array( 'Privacy Reference', 'Use of this website is also governed by our Privacy Policy, which explains how we collect and use your information.' ),
		array( 'Governing Law', 'These terms are governed by the laws of the Federal Republic of Nigeria.' ),
	);
	foreach ( $sections as $section ) :
	?>
  <div class="reveal" style="margin-bottom:36px;">
    <h3 style="font-size:22px;"><?php echo esc_html( $section[0] ); ?></h3>
    <p style="color:#5b6370;"><?php echo wp_kses_post( $section[1] ); ?></p>
  </div>
  <?php endforeach; ?>

  <p style="color:#5b6370;">For questions about these terms, contact us at <a href="mailto:<?php echo esc_attr( eclectic_seals_option( 'eclectic_seals_email', 'eclecticseals@gmail.com' ) ); ?>" style="color:var(--navy); font-weight:600;"><?php echo esc_html( eclectic_seals_option( 'eclectic_seals_email', 'eclecticseals@gmail.com' ) ); ?></a>.</p>
</div></section>

<?php get_footer(); ?>
