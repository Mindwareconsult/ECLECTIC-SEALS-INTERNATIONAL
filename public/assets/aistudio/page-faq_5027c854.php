<?php
/**
 * Template Name: FAQ Page
 * Template Post Type: page
 *
 * @package Eclectic_Seals
 */

get_header();

get_template_part(
	'template-parts/hero/page-hero',
	null,
	array(
		'image'      => 'hero_faq.jpg',
		'breadcrumb' => 'FAQ',
		'eyebrow'    => 'Support',
		'title'      => 'Frequently Asked Questions',
		'lead'       => 'Everything you need to know about our construction, interior design, renovation, property management, and consultation process.',
		'buttons'    => array(
			array( 'label' => 'Request a Quote', 'url' => home_url( '/request-quote/' ), 'style' => 'primary' ),
			array( 'label' => 'Contact Our Team', 'url' => home_url( '/contact/' ), 'style' => 'outline' ),
		),
	)
);
?>

<section class="section" id="main"><div class="container">
    <div class="faq-search-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg><input type="text" id="faq-search" placeholder="Search a question..." aria-label="Search FAQs"></div>
  </div></section>

<section class="section" style="padding-top:0;"><div class="container">
  <div class="filter-bar text-center" style="justify-content:center;">
    <button class="filter-btn faq-cat-btn active" data-cat="all">All</button>
    <?php
    $faq_categories = array(
			'general'      => 'General',
			'construction' => 'Construction',
			'interior'     => 'Interior Design',
			'renovation'   => 'Renovation',
			'property'     => 'Property Management',
			'paint'        => 'Paint Manufacturing',
			'payments'     => 'Payments',
			'support'      => 'Support',
		);
		foreach ( $faq_categories as $slug => $label ) :
		?>
    <button class="filter-btn faq-cat-btn" data-cat="<?php echo esc_attr( $slug ); ?>"><?php echo esc_html( $label ); ?></button>
    <?php endforeach; ?>
  </div>

  <div class="accordion faq-list" style="max-width:860px; margin:0 auto;">
    <?php
    $faqs = array(
			array( 'general', "What services does Eclectic Seals Int&rsquo;l provide?", 'We provide interior design, interior finishing, furnishing, renovation, landscaping, construction supplies, building &amp; civil construction, paint manufacturing, and real estate property management.' ),
			array( 'general', 'Do you operate outside Abuja?', 'Yes, we take on select projects across Nigeria depending on project scope and site accessibility.' ),
			array( 'general', 'Do you offer free consultations?', 'Yes. Every project begins with a complimentary consultation to understand your brief and goals.' ),
			array( 'general', 'How do I get started?', 'Submit a request through our Request a Quote page, call our office, or message us on WhatsApp to begin.' ),
			array( 'construction', 'How long does it take to complete a residential project?', 'A single-room renovation may take 2&ndash;4 weeks, while a full residential build typically takes 6&ndash;12 months depending on scope.' ),
			array( 'construction', 'Can you handle commercial developments?', 'Yes, we manage commercial construction from offices and retail spaces to mixed-use developments.' ),
			array( 'construction', 'Do you manage construction permits?', 'Yes, our project management team assists with the necessary approvals and documentation.' ),
			array( 'construction', 'How do you ensure quality?', 'Every project passes through planning, inspection, testing and approval checkpoints before delivery.' ),
			array( 'interior', 'Can you design both residential and commercial interiors?', 'Yes, our interior design team works across homes, offices, hospitality and retail spaces.' ),
			array( 'interior', 'Do you offer 3D design concepts?', 'Yes, we provide 3D visualisations and mood boards before any physical work begins.' ),
			array( 'interior', 'Can I choose my own materials?', "Yes, we're happy to work with client-supplied materials alongside our own recommendations." ),
			array( 'renovation', 'Can I renovate my home while living in it?', 'In most cases, yes. We sequence work to minimise disruption to your daily routine.' ),
			array( 'renovation', 'Do you renovate offices?', 'Yes, we handle commercial renovations, often scheduled around business hours to reduce downtime.' ),
			array( 'property', 'Do you manage rental properties?', 'Yes, our property management division handles facility management, maintenance, and tenant management.' ),
			array( 'property', 'Do you inspect properties regularly?', 'Yes, scheduled inspections are part of every property management contract.' ),
			array( 'paint', 'Can you produce custom paint colours?', 'Yes, our in-house paint manufacturing division offers custom colour matching.' ),
			array( 'paint', 'Are your paints weather resistant?', 'Yes, our exterior paint formulations are designed for Nigeria&rsquo;s rainy season conditions.' ),
			array( 'payments', 'How are projects priced?', 'Pricing is based on an itemised quotation following your consultation and site assessment.' ),
			array( 'payments', 'Can payments be made in phases?', 'Yes, we structure payments around project milestones.' ),
			array( 'payments', 'Which payment methods are accepted?', 'We accept bank transfers and other standard payment methods agreed at contract signing.' ),
			array( 'support', 'Do you offer after-project support?', 'Yes, after-sales support is included for a period following handover.' ),
			array( 'support', 'Is maintenance available?', 'Yes, ongoing maintenance contracts are available through our property management division.' ),
		);
		foreach ( $faqs as $faq ) :
		?>
    <div class="accordion-item" data-cat="<?php echo esc_attr( $faq[0] ); ?>"><button class="accordion-head"><?php echo wp_kses_post( $faq[1] ); ?><span class="plus"></span></button><div class="accordion-body"><div class="accordion-body-inner"><?php echo wp_kses_post( $faq[2] ); ?></div></div></div>
    <?php endforeach; ?>
  </div>
</div></section>

<?php
get_template_part(
	'template-parts/cta/cta-quote',
	null,
	array(
		'heading' => 'Still Have Questions?',
		'text'    => 'Our team is happy to talk through the specifics of your project.',
		'buttons' => array(
			array( 'label' => 'Request a Quote', 'url' => home_url( '/request-quote/' ), 'style' => 'primary' ),
			array( 'label' => 'Contact Us', 'url' => home_url( '/contact/' ), 'style' => 'outline' ),
		),
	)
);

get_footer();
