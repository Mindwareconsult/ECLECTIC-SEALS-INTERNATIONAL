<?php
/**
 * Template Name: Services Page
 * Template Post Type: page
 *
 * @package Eclectic_Seals
 */

get_header();

get_template_part(
	'template-parts/hero/page-hero',
	null,
	array(
		'image'      => 'hero_services.jpg',
		'breadcrumb' => 'Services',
		'eyebrow'    => 'What We Offer',
		'title'      => 'Complete Design &amp; Construction Solutions',
		'lead'       => 'From concept to completion, Eclectic Seals Int&rsquo;l provides comprehensive solutions that transform ordinary spaces into extraordinary environments.',
		'buttons'    => array(
			array( 'label' => 'Request Quote', 'url' => home_url( '/request-quote/' ), 'style' => 'primary' ),
			array( 'label' => 'Call Now', 'url' => 'tel:+2348027997172', 'style' => 'outline' ),
		),
	)
);
?>

<section class="section" id="main"><div class="container">
    <div class="section-head center">
      <div class="eyebrow" style="justify-content:center;">Integrated Delivery</div>
      <h2>One Team, Every Stage Of Your Project</h2>
      <p>We combine design, construction, materials, and property management under a single point of responsibility &mdash; so quality is consistent and nothing falls between the cracks. Every engagement includes professional project management, premium materials, and a team that has delivered similar work before.</p>
    </div>
  </div></section>

<?php
$service_blocks = array(
	array( 'id' => 'interior-design', 'light' => true, 'reverse' => false, 'image' => 'p1.jpg', 'icon' => 'M4 4h16v16H4zM4 9h16M9 9v11', 'title' => 'Interior Design', 'text' => 'We shape residential and commercial interiors around how a space will actually be used, then layer in the lighting, materials and styling that make it feel considered rather than decorated.', 'bullets' => array( 'Residential Interiors', 'Commercial Interiors', 'Space Planning', 'Lighting Design', 'Furniture Selection', '3D Visualization', 'Mood Boards', 'Luxury Styling' ) ),
	array( 'id' => 'interior-finishing', 'light' => false, 'reverse' => true, 'image' => 'p2.jpg', 'icon' => 'M3 21l6-6M14 4l6 6-9 9H5v-6z', 'title' => 'Interior Finishing &amp; Furnishing', 'text' => 'The details that separate a finished space from an unfinished one: ceilings, floors, walls, and the furniture that completes the room.', 'bullets' => array( 'POP Ceilings', 'Wall Finishes', 'Flooring', 'Curtains', 'Kitchen Installation', 'Wardrobes', 'Furniture', 'Decor Accessories' ) ),
	array( 'id' => 'renovation', 'light' => true, 'reverse' => false, 'image' => 'p3.jpg', 'icon' => 'M14 2 4 12l3 3L17 5zM17 5l2 2M9 15l-4 4 3 1 1 3 4-4', 'title' => 'Renovation', 'text' => 'We upgrade and modernise existing residential and commercial properties with minimal disruption to your daily routine or operations.', 'bullets' => array( 'Residential Renovation', 'Commercial Renovation', 'Office Remodeling', 'Kitchen Upgrades', 'Bathroom Remodeling', 'Structural Improvements', 'Modernization' ) ),
	array( 'id' => 'landscaping', 'light' => false, 'reverse' => true, 'image' => 'p4.jpg', 'icon' => 'M12 2v6M8 6l4 2 4-2M4 22c2-6 6-9 8-9s6 3 8 9M2 22h20', 'title' => 'Landscaping', 'text' => 'Outdoor spaces engineered and planted with the same precision as the interiors they complement.', 'bullets' => array( 'Garden Design', 'Hardscape', 'Outdoor Lighting', 'Water Features', 'Walkways', 'Green Areas', 'Maintenance' ) ),
	array( 'id' => 'supplies', 'light' => true, 'reverse' => false, 'image' => 'p5.jpg', 'icon' => 'M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4 9-4V7M12 11v10', 'title' => 'Construction Supplies', 'text' => 'Reliable access to premium building materials, procured and delivered on schedule for projects of any scale.', 'bullets' => array( 'Premium Cement', 'Steel', 'Tiles', 'Paint', 'Electrical Materials', 'Plumbing Materials', 'Roofing Materials', 'Finishing Materials' ) ),
	array( 'id' => 'construction', 'light' => false, 'reverse' => true, 'image' => 'p6.jpg', 'icon' => 'M3 21V9l6-4 6 4v12M9 21V13h6v8M15 21V11l6-3v13', 'title' => 'Building &amp; Construction', 'text' => 'End-to-end residential and commercial construction, managed by our own project managers and engineers from groundbreaking to handover.', 'bullets' => array( 'Residential Construction', 'Commercial Buildings', 'Office Complexes', 'Warehouses', 'Civil Works', 'Project Management', 'Structural Engineering', 'Turnkey Construction' ) ),
	array( 'id' => 'paint', 'light' => true, 'reverse' => false, 'image' => 'p7.jpg', 'icon' => 'M19 3H9a2 2 0 0 0-2 2v6l-3 7a2 2 0 0 0 2 3h9l3-9V5a2 2 0 0 0-2-2z', 'title' => 'Paint Manufacturing', 'text' => 'In-house paint production means consistent colour, coverage, and durability &mdash; and colours matched exactly to your specification.', 'bullets' => array( 'Interior Paints', 'Exterior Paints', 'Protective Coatings', 'Custom Colour Matching', 'Decorative Finishes', 'Eco-Friendly Paint Solutions' ) ),
	array( 'id' => 'property', 'light' => false, 'reverse' => true, 'image' => 'p8.jpg', 'icon' => 'M3 10.5 12 3l9 7.5M5 9v11h14V9M9 20v-6h6v6', 'title' => 'Real Estate Property Management', 'text' => 'Ongoing facility management and asset protection for owners, investors and landlords who want their property performing without daily involvement.', 'bullets' => array( 'Facility Management', 'Property Maintenance', 'Rent Collection', 'Tenant Management', 'Property Inspection', 'Asset Protection', 'Estate Administration', 'Investment Advisory' ) ),
	array( 'id' => 'pool', 'light' => true, 'reverse' => false, 'image' => 'projects/swimming-pool-construction-and-maintenance/1.jpg', 'icon' => 'M2 17c1.5 1.2 3 1.2 4.5 0s3-1.2 4.5 0 3 1.2 4.5 0 3-1.2 4.5 0M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6', 'title' => 'Swimming Pool Construction &amp; Maintenance', 'text' => 'Pools built and maintained end to end &mdash; structural construction, tiling and finishing, filtration and plumbing, water treatment, and ongoing upkeep.', 'bullets' => array( 'Pool Construction', 'Tiling & Finishing', 'Filtration & Plumbing', 'Water Treatment', 'Routine Maintenance' ) ),
);

foreach ( $service_blocks as $block ) :
	$section_class = 'section ' . ( $block['light'] ? 'section--light' : '' );
	?>
<section class="<?php echo esc_attr( trim( $section_class ) ); ?>" id="<?php echo esc_attr( $block['id'] ); ?>"><div class="container split">
      <div class="split-media reveal-left"<?php echo $block['reverse'] ? ' style="order:2;"' : ''; ?>><img src="<?php echo eclectic_seals_image( $block['image'] ); ?>" alt="<?php echo esc_attr( wp_strip_all_tags( $block['title'] ) . ' project by ' . get_bloginfo( 'name' ) ); ?>" loading="lazy"></div>
      <div class="reveal-right">
        <div class="icon" style="margin-bottom:20px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="<?php echo esc_attr( $block['icon'] ); ?>"/></svg></div>
        <h2 style="font-size:30px;"><?php echo wp_kses_post( $block['title'] ); ?></h2>
        <p style="color:#5b6370;"><?php echo esc_html( $block['text'] ); ?></p>
        <div class="service-bullets">
          <?php foreach ( $block['bullets'] as $bullet ) : ?>
          <div class="service-bullet"><span class="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg></span><?php echo esc_html( $bullet ); ?></div>
          <?php endforeach; ?>
        </div>
        <a href="<?php echo esc_url( home_url( '/request-quote/' ) ); ?>" class="btn btn-primary" style="margin-top:12px;">Book Consultation <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
    </div></section>
<?php endforeach; ?>

<section class="section section--dark"><div class="container"><div class="section-head center"><div class="eyebrow" style="justify-content:center;">Our Workflow</div><h2>How A Project Moves From Brief To Handover</h2></div><div class="process-track">
  <?php
  $workflow = array( 'Client Consultation', 'Site Assessment', 'Proposal', 'Design', 'Approval', 'Execution', 'Quality Assurance', 'Completion' );
	foreach ( $workflow as $i => $step ) :
	?>
  <div class="process-step reveal-scale" style="--i:<?php echo (int) ( $i + 1 ); ?>"><div class="seal"><span><?php echo esc_html( sprintf( '%02d', $i + 1 ) ); ?></span></div><h4><?php echo esc_html( $step ); ?></h4></div>
  <?php endforeach; ?>
</div></div></section>

<section class="section"><div class="container"><div class="section-head center"><div class="eyebrow" style="justify-content:center;">Reliability</div><h2>Why Our Process Works</h2></div><div class="grid-3 stagger">
  <?php
  $reliability = array(
		array( 'icon' => 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75', 'title' => 'Transparent Communication', 'text' => 'You always know what stage your project is at.' ),
		array( 'icon' => 'M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5z', 'title' => 'Expert Team', 'text' => 'Licensed engineers and experienced designers on every job.' ),
		array( 'icon' => 'M3 21V9l6-4 6 4v12M9 21V13h6v8M15 21V11l6-3v13', 'title' => 'Quality Materials', 'text' => 'Sourced or manufactured to our own specification.' ),
		array( 'icon' => 'M4 4h16v16H4zM4 9h16M9 9v11', 'title' => 'Modern Equipment', 'text' => 'The right tools for precision and safety on site.' ),
		array( 'icon' => 'M12 7v5l3 3', 'circle' => true, 'title' => 'Timely Delivery', 'text' => 'Schedules built with realistic buffers, tracked weekly.' ),
		array( 'icon' => 'M12 2l3 6.5 7 1-5 5 1.2 7L12 18l-6.2 3.5 1.2-7-5-5 7-1z', 'title' => 'Customer Satisfaction', 'text' => 'Feedback loops built into every project stage.' ),
	);
	foreach ( $reliability as $i => $item ) :
	?>
  <div class="card reveal" style="--i:<?php echo (int) $i; ?>"><div class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><?php if ( ! empty( $item['circle'] ) ) : ?><circle cx="12" cy="12" r="9"/><?php endif; ?><path d="<?php echo esc_attr( $item['icon'] ); ?>"/></svg></div><h3 style="font-size:18px;"><?php echo esc_html( $item['title'] ); ?></h3><p style="margin:0;"><?php echo esc_html( $item['text'] ); ?></p></div>
  <?php endforeach; ?>
</div></div></section>

<section class="section section--light"><div class="container"><div class="section-head center"><div class="eyebrow" style="justify-content:center;">Gallery</div><h2>A Glimpse Of Our Craftsmanship</h2></div><div class="masonry">
  <?php for ( $g = 1; $g <= 9; $g++ ) : ?>
  <div class="gallery-img reveal"><img src="<?php echo eclectic_seals_image( 'gal' . $g . '.jpg' ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?> project detail" loading="lazy"></div>
  <?php endfor; ?>
</div></div></section>


<section class="section"><div class="container"><div class="section-head center"><div class="eyebrow" style="justify-content:center;">Questions</div><h2>Frequently Asked Questions</h2></div><div class="accordion" style="max-width:820px; margin:0 auto;">
  <?php
  $service_faqs = array(
		array( 'How long does a project take?', 'Timelines vary by scope; a single-room renovation may take 2&ndash;4 weeks, while a full residential build can take 6&ndash;12 months. We provide a specific timeline in every quotation.' ),
		array( 'Do you offer free consultations?', 'Yes. Initial consultations are complimentary and help us understand your brief before issuing a quotation.' ),
		array( 'Can you manage projects outside Abuja?', 'Yes, we take on select projects across Nigeria depending on scope and site access.' ),
		array( 'Do you provide design before construction?', 'Yes, our design team develops concepts and drawings before any construction work begins.' ),
		array( 'Can I purchase materials only?', 'Yes, our construction supplies division serves clients who only need premium materials without full project management.' ),
		array( 'Do you offer maintenance services?', 'Yes, our property management division offers ongoing maintenance contracts after project completion.' ),
	);
	foreach ( $service_faqs as $faq ) :
	?>
  <div class="accordion-item"><button class="accordion-head"><?php echo esc_html( $faq[0] ); ?><span class="plus"></span></button><div class="accordion-body"><div class="accordion-body-inner"><?php echo wp_kses_post( $faq[1] ); ?></div></div></div>
  <?php endforeach; ?>
</div></div></section>

<?php
get_template_part(
	'template-parts/cta/cta-quote',
	null,
	array(
		'heading' => "Let&rsquo;s Build Something Exceptional Together",
		'text'    => 'Request a quotation or chat with our team on WhatsApp to get started.',
		'buttons' => array(
			array( 'label' => 'Request a Quote', 'url' => home_url( '/request-quote/' ), 'style' => 'primary' ),
			array( 'label' => 'Chat on WhatsApp', 'url' => 'https://wa.me/2348027997172', 'style' => 'outline' ),
		),
	)
);

get_footer();
