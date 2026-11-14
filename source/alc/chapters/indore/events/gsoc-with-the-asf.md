---
title: "GSoC with the ASF"
# Overrides the headless cascade in chapters/_index.md so this page is rendered.
build:
  render: always
  list: always
wiki_source: https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=240882923
wiki_last_modified: 2023-05-02
---

#### Agenda

GSoC 2023 season has just started and it is a good opportunity to contribute and learn about open source.  
ASF has been participating in the event for several years now and will also be participating this year.

This session is targeted towards college students in Indore, to spread awareness about GSoC and guide them through the Apache Way and how the ASF works at large to facilitate participation in the ASF projects for this season.  
We aspire to bring in more contributions to the Apache projects by developing interest and awareness in the college students.

This will be an in-person meetup scheduled on 10th February 2023, Friday.

We will be covering the following topics:  
  
**1. Introduction to GSoC**  
\- Why they should participate  
\- GSoC 2023 timeline  
\- Tips on how to approach a mentoring organization  
\- Tips on how to sail through the selection process  
  
(Speaker: Priya Sharma, PMC ComDev)  
  
**2. GSoC with the ASF**  
\- Open Source  
\- What is ASF and its ties with GSoC  
\- The Apache Way  
\- How Apache projects community work  
\- How to set up and get started with a project  
  
(Speaker: Aditya Sharma, ASF Member)

**Date :** 10 Feb 2023

**Venue :**

HotWax Systems,

80, Scheme Number 78, Part II,  
Vijay Nagar,  
Indore, Madhya Pradesh  
452010  
<https://goo.gl/maps/3XKrbuXUd3pYcDFE7>

**Time :** 10:30 AM IST to 12:30 PM IST

[Gsoc-with-ASF.pdf](/alc/attachments/chapters/indore/events/gsoc-with-the-asf/Gsoc-with-ASF.pdf)

GSoC 2023 Idea List [GSoC](https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=247827549)

<table style="width:100%;">
<tbody>
<tr>
<td>Key</td>
<td>Summary</td>
<td>required-knowledge</td>
<td>difficulty-level</td>
<td>potential-mentor</td>
<td>Description</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/STATISTICS-78">STATISTICS-78</a></td>
<td><a href="https://issues.apache.org/jira/browse/STATISTICS-78">Create JMH benchmarks for alternative summation algorithms</a></td>
<td></td>
<td>Medium</td>
<td></td>
<td><p>Develop JMH benchmarks to compare:</p>
<ol>
<li>Simple Sum (simply add the input values)</li>
<li>Kahan summation algorithm (<a href="https://en.wikipedia.org/wiki/Kahan_summation_algorithm)">https://en.wikipedia.org/wiki/Kahan_summation_algorithm)</a></li>
<li>Two sum method (Neumaier sum) <a href="https://en.wikipedia.org/wiki/Kahan_summation_algorithm#Further_enhancements">https://en.wikipedia.org/wiki/Kahan_summation_algorithm#Further_enhancements</a></li>
<li>Higher-order extended precision floating-point sums</li>
<li>The add() methods in `BigDecimal` class with various MathContext limits on the precision.</li>
</ol></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/STATISTICS-77">STATISTICS-77</a></td>
<td><a href="https://issues.apache.org/jira/browse/STATISTICS-77">Implement Sum</a></td>
<td></td>
<td>Medium</td>
<td></td>
<td><p>This implementation uses <code>commons-numbers</code> <a href="https://github.com/apache/commons-numbers/blob/master/commons-numbers-core/src/main/java/org/apache/commons/numbers/core/Sum.java">Sum</a> as the underlying implementation.</p>
<p>This may be further expanded to include various other Sum implementations like <a href="https://en.wikipedia.org/wiki/Kahan_summation_algorithm">Kahan Sum</a>, <code>Neumaier Sum</code> (Two sum method) etc. with the option for the users to choose an implementation. However, before beginning the implementation of various other algorithms it may be worthwhile to discuss and investigate the relative speed of the current Sum implementation compared to <code>DoubleStream.sum</code> through JMH benchmarks.<br />
When we know the different speeds, it would be more clear if the user should have a choice for this statistic, e.g.</p>
<ul>
<li>When using <code>DoubleStream.sum</code> is too slow and it would be nice to have a simple sum variation.</li>
<li>When the sum has a lot of cancellation and <code>DoubleStream.sum</code> suffers from random walk around zero.</li>
</ul></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/STATISTICS-76">STATISTICS-76</a></td>
<td><a href="https://issues.apache.org/jira/browse/STATISTICS-76">Implement Max</a></td>
<td></td>
<td>Easy</td>
<td></td>
<td>Logic to compute the maximum of all the input values.</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/STATISTICS-75">STATISTICS-75</a></td>
<td><a href="https://issues.apache.org/jira/browse/STATISTICS-75">Create JMH benchmarks for statistic initialization</a></td>
<td></td>
<td>Easy</td>
<td></td>
<td>Create JMH benchmarks for statistic initialization comparing Arrays.stream to a simple for loop.</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/STATISTICS-73">STATISTICS-73</a></td>
<td><a href="https://issues.apache.org/jira/browse/STATISTICS-73">Create a new o.a.c.s.descriptive module</a></td>
<td></td>
<td>Easy</td>
<td></td>
<td>Create a new commons-statistics-descriptive module which contains the implementation of all univariate statistics.</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/STATISTICS-72">STATISTICS-72</a></td>
<td><a href="https://issues.apache.org/jira/browse/STATISTICS-72">Implement Min</a></td>
<td></td>
<td>Easy</td>
<td></td>
<td>Logic to compute the minimum of all values seen so far.</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/STATISTICS-71">STATISTICS-71</a></td>
<td><a href="https://issues.apache.org/jira/browse/STATISTICS-71">Implementation of Univariate Statistics</a></td>
<td></td>
<td>Medium</td>
<td>Alex Herbert, Gilles Sadowski</td>
<td><p>Jira ticket to track the implementation of the Univariate statistics required for the updated SummaryStatistics API.<br />
The implementation would be "storeless". It should be used for calculating statistics that can be computed in one pass through the data without storing the sample values.</p>
<p>Currently I have the definition of API as (this might evolve as I continue working)</p>
<pre>public interface DoubleStorelessUnivariateStatistic extends DoubleSupplier {<br><br>    DoubleStorelessUnivariateStatistic add(double v);<br><br>    long getCount();<br><br>    void combine(DoubleStorelessUnivariateStatistic other);<br>} </pre></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/STATISTICS-54">STATISTICS-54</a></td>
<td><a href="https://issues.apache.org/jira/browse/STATISTICS-54">[GSoC] Summary statistics API for Java 8 streams</a></td>
<td></td>
<td></td>
<td></td>
<td><p>Placeholder for tasks that could be undertaken in this year's <a href="https://summerofcode.withgoogle.com/">GSoC</a>.</p>
<p>Ideas:</p>
<ul>
<li>Design an updated summary statistics API for use with Java 8 streams based on the summary statistic implementations in the Commons Math <code>stat.descriptive</code> package including <code>moments</code>, <code>rank</code> and <code>summary</code> sub-packages.</li>
</ul></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/NUMBERS-193">NUMBERS-193</a></td>
<td><a href="https://issues.apache.org/jira/browse/NUMBERS-193">Add support for extended precision floating-point numbers</a></td>
<td></td>
<td>Easy</td>
<td></td>
<td><p>Add implementations of extended precision floating point numbers.</p>
<p>An extended precision floating point number is a series of floating-point numbers that are non-overlapping such that:</p>
```
double-double (a, b):
|a| > |b|
a == a + b
```
<p>Common representations are double-double and quad-double (see for example David Bailey's paper on a quad-double library: <a href="https://www.davidhbailey.com/dhbpapers/qd.pdf">QD</a>).</p>
<p>Many computations in the Commons Numbers and Statistics libraries use extended precision computations where the accumulated error of a double would lead to complete cancellation of all significant bits; or create intermediate overflow of integer values.</p>
<p>This project would formalise the code underlying these use cases with a generic library applicable for use in the case where the result is expected to be a finite value and using Java's BigDecimal and/or BigInteger negatively impacts performance.</p>
<p>An example would be the average of long values where the intermediate sum overflows or the conversion to a double loses bits:</p>
```
long[] values = {Long.MAX_VALUE, Long.MAX_VALUE}; System.out.println(Arrays.stream(values).average().getAsDouble()); System.out.println(Arrays.stream(values).mapToObj(BigDecimal::valueOf)
    .reduce(BigDecimal.ZERO, BigDecimal::add)
    .divide(BigDecimal.valueOf(values.length)).doubleValue());
long[] values2 = {Long.MAX_VALUE, Long.MIN_VALUE}; System.out.println(Arrays.stream(values2).asDoubleStream().average().getAsDouble()); System.out.println(Arrays.stream(values2).mapToObj(BigDecimal::valueOf)
    .reduce(BigDecimal.ZERO, BigDecimal::add)
    .divide(BigDecimal.valueOf(values2.length)).doubleValue());
```
<p>Outputs:</p>
<pre>-1.0<br>9.223372036854776E18<br>0.0<br>-0.5</pre></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/NEMO-485">NEMO-485</a></td>
<td><a href="https://issues.apache.org/jira/browse/NEMO-485">Efficient Dynamic Reconfiguration in Stream Processing</a></td>
<td></td>
<td></td>
<td></td>
<td>In Stream processing, we have many methods, starting from the primitive checkpoint-and-replay to a more fancy version of reconfiguration and reinitiation of stream workloads. We aim to find a way to find the most effective and efficient way of reconfiguring stream workloads. Sub-issues are to be created later on.</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/NEMO-479">NEMO-479</a></td>
<td><a href="https://issues.apache.org/jira/browse/NEMO-479">Approximate the factors that affect the stage group level execution time</a></td>
<td></td>
<td></td>
<td></td>
<td>There are some factors that can affect the stage group level simulation, such as a latency, the rate of skewed data and the error rate of the executor etc. It is required to find a reasonable distribution form for these factors. Such as the normal distribution or the landau distribution. In actual running, It makes it possible to approximate the model with a small amount of data.</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/NEMO-478">NEMO-478</a></td>
<td><a href="https://issues.apache.org/jira/browse/NEMO-478">Implement an Accurate Simulator based on Functional model</a></td>
<td></td>
<td></td>
<td></td>
<td><p>Missing a deadline often has significant consequences for the business. And simulator can contributes to other approach for optimization</p>
<p>So Implement a Simulator for Stream Processing Based on Functional models.</p>
<p>There are some requirements:</p>
<ul>
<li>Simulation should be able to execute before or during job execution</li>
<li>When a simulation is executed during job is running, It must be fast enough not to affect the job.</li>
<li>Information about running environment is received through argument.</li>
<li>At least network topology should be considered for the WAN environment.</li>
</ul></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/NEMO-477">NEMO-477</a></td>
<td><a href="https://issues.apache.org/jira/browse/NEMO-477">Implement a model that represent a task level exeuction time with statistical analysis</a></td>
<td></td>
<td></td>
<td></td>
<td><p>The current SimulatedTaskExecutor is hardly available. because it needs actual metric to predict execution time. To increase utilization, we need new model that predicts a task level execution time with statistical analysis.</p>
<p>Some of the related TODOs are as follows:</p>
<ul>
<li>Find factors that affect a task level execution time. with loose grid search.</li>
<li>Infer the most suitable model with tight grid search.</li>
</ul></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/NEMO-471">NEMO-471</a></td>
<td><a href="https://issues.apache.org/jira/browse/NEMO-471">Evaluate the performance of Work Stealing implementation</a></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/NEMO-468">NEMO-468</a></td>
<td><a href="https://issues.apache.org/jira/browse/NEMO-468">Detect skewed task periodically</a></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/NEMO-467">NEMO-467</a></td>
<td><a href="https://issues.apache.org/jira/browse/NEMO-467">Collect task statistics necessary for estimating duration</a></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/NEMO-466">NEMO-466</a></td>
<td><a href="https://issues.apache.org/jira/browse/NEMO-466">Dynamic Work Stealing on Nemo for handling skews</a></td>
<td></td>
<td></td>
<td></td>
<td><p>We aim to handle the problem on throttled resources (heterogeneous resources) and skewed input data. In order to solve this problem, we suggest dynamic work stealing that can dynamically track task statuses and steal workloads among each other. To do this, we have the following action items:</p>
<ul>
<li>Dynamically collecting task statistics during execution</li>
<li>Detecting skewed tasks periodically</li>
<li>Splitting the data allocated in skewed tasks and reallocating them into new tasks</li>
<li>Synchronizing the optimization procedure</li>
<li>Evaluation of the resulting implementations</li>
</ul></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/NEMO-449">NEMO-449</a></td>
<td><a href="https://issues.apache.org/jira/browse/NEMO-449">Runtime Level Caching Mechanism</a></td>
<td></td>
<td></td>
<td></td>
<td><p>If the the compile time identifies what data can be cached, the runtime requires logic to make this happen.</p>
<p>Implementation needs:</p>
<ul>
<li>(Driver) receive and update the status of blocks from various Executors, right now this seems to be best implemented as part of BlockManagerMaster</li>
<li>(Driver) communicate to the Executors the availability, location and status of blocks</li>
<li>Possible concurrency issues:</li>
</ul>
<ol>
<li>Concurrency in Driver when multiple Executors update/inquire the same block information</li>
<li>Concurrency in Executor when a single cached block is accessed simultaneously.</li>
</ol></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/NEMO-444">NEMO-444</a></td>
<td><a href="https://issues.apache.org/jira/browse/NEMO-444">Implement spill mechanism on Nemo</a></td>
<td></td>
<td></td>
<td></td>
<td>Currently, Nemo doesn't have a spill mechanism. This makes executors prone to memory problems such as OOM(Out Of Memory) or GC when task data is large. For example, handling skewed shuffle data in Nemo results in OOM and executor failure, as all data has to be handled in-memory.<br>We need to spill in-memory data to secondary storage when there are not enough memory in executor.</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/NEMO-443">NEMO-443</a></td>
<td><a href="https://issues.apache.org/jira/browse/NEMO-443">Efficient Caching and Spilling on Nemo</a></td>
<td></td>
<td></td>
<td></td>
<td><p>In-memory caching and spilling are essential features in in-memory big data processing frameworks, and Nemo needs one.</p>
<ul>
<li>Identify and persist frequently used data and unpersist it when its usage ended</li>
<li>Spill in-memory data to disk upon memory pressure</li>
</ul></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/NEMO-441">NEMO-441</a></td>
<td><a href="https://issues.apache.org/jira/browse/NEMO-441">Dynamic Task Sizing on Nemo</a></td>
<td></td>
<td></td>
<td></td>
<td>This is an umbrella issue to keep track of the issues related to the dynamic task sizing feature on Nemo.<br>Dynamic task sizing needs to consider a workload and try to decide on the optimal task size based on the runtime metrics and characteristics. It should have an effect on the parallelism and the partitions, on how many partitions an intermediate data should be divided/shuffled into, and to effectively handle skews in the meanwhile.</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/NEMO-425">NEMO-425</a></td>
<td><a href="https://issues.apache.org/jira/browse/NEMO-425">Nemo on Google Dataproc</a></td>
<td></td>
<td></td>
<td></td>
<td>Issues for making it easy to install and use Nemo on Google Dataproc.</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/NEMO-389">NEMO-389</a></td>
<td><a href="https://issues.apache.org/jira/browse/NEMO-389">Enhance Nemo to support autoscaling for bursty loads</a></td>
<td></td>
<td></td>
<td></td>
<td>The load of streaming jobs usually fluctuate according to the input rate or operations (e.g., window). Supporting the automatic scaling could reduce the operational cost of running streaming applications, while minimizing the performance degradation that can be caused by the bursty loads.<br>We can harness the cloud resources such as VMs and serverless frameworks to acquire computing resources on demand. To realize the automatic scaling, the following features should be implemented.<br>1) state migration: scaling jobs require moving tasks (or partitioning a task to multiple ones). In this situation, the internal state of the task should be serialized/deserialized.<br>2) input/output rerouting: if a task is moved to a new worker, the input and output of the task should be redirected.<br>3) dynamic <code>Executor</code> or <code>Task</code> creation/deletion: <code>Executor}}s or {{Task</code> can be dynamically created or deleted.<br>4) scaling policy: a scaling policy that decides when and how to scale out/in should be implemented.</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/MATH-1655">MATH-1655</a></td>
<td><a href="https://issues.apache.org/jira/browse/MATH-1655">Refactoring of GA functionality</a></td>
<td></td>
<td>Medium</td>
<td></td>
<td><p>As discussed extensively on the "dev" ML[1][2], there are two competing designs (please review them on the <a href="https://gitbox.apache.org/repos/asf?p=commons-math.git;a=shortlog;h=refs/heads/feature__MATH-1563__genetic_algorithm">dedicated git branch</a>) for the refactoring of the basic functionality currently implemented in the <a href="https://gitbox.apache.org/repos/asf?p=commons-math.git;a=tree;f=commons-math-legacy/src/main/java/org/apache/commons/math4/legacy/genetics;h=693aa6b1b746b65e27774f720a3655315d0f43f6;hb=HEAD"><code>org.apache.commons.math4.legacy.genetics</code></a> "legacy" package.</p>
<p>TL;DR;</p>
<ul>
<li>The discussion has pointed to major (from a maintenance POV) issues of the design proposed by the OP.</li>
<li>The alternative (much simpler) design has been implemented as proof-of-concept (indicating that some corner might have been cut).</li>
<li>The OP mentioned correctness issues in the "simple" design but did neither fix them nor provided answers on the LM to that effect.</li>
<li>Questions concerning other possible "bloat" (e.g. on using a custom representation of the "binary chromosome" concept instead of the <a href="https://docs.oracle.com/javase/8/docs/api/java/util/BitSet.html"><code>BitSet</code></a> available from the JDK) were also left dangling.</li>
<li>Refactoring of the "basic" GA functionality (the purpose of the "proof-of-concept") must be decoupled from the new feature which the OP wanted to implement ("adaptive probability generation").</li>
<li>Unit tests (a.o. all those from the "legacy" code) must demonstrate that the refactored code does (or does not) behave correctly, and bugs should be fixed on the "simple" implementation, before implementing the new feature on top of it.</li>
</ul>
<p>[1] <a href="https://markmail.org/message/qn7gq2y7xjoxukzp">https://markmail.org/message/qn7gq2y7xjoxukzp</a><br />
[2] <a href="https://markmail.org/message/f66iii3a4kmjaprr">https://markmail.org/message/f66iii3a4kmjaprr</a></p></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/MATH-1641">MATH-1641</a></td>
<td><a href="https://issues.apache.org/jira/browse/MATH-1641">[GSoC] Update components including machine learning; linear algebra; special functions</a></td>
<td></td>
<td></td>
<td>Alex Herbert, Gilles Sadowski</td>
<td><p>Placeholder for tasks that could be undertaken in this year's <a href="https://summerofcode.withgoogle.com/">GSoC</a>.</p>
<p>Ideas (extracted from the <a href="https://markmail.org/message/2qckwxw2x4ue36sd">"dev" ML</a>):</p>
<ol>
<li>Redesign and modularize the "ml" package<br />
-&gt; main goal: enable multi-thread usage.</li>
<li>Abstract the linear algebra utilities<br />
-&gt; main goal: allow switching to alternative implementations.</li>
<li>Redesign and modularize the "random" package<br />
-&gt; main goal: general support of low-discrepancy sequences.</li>
<li>Refactor and modularize the "special" package<br />
-&gt; main goals: ensure accuracy and performance and better API,<br />
add other functions.</li>
<li>Upgrade the test suite to <a href="https://junit.org/junit5/">Junit 5</a><br />
-&gt; additional goal: collect a list of "odd" expectations.</li>
<li>Review and finalize pending issues about the refactoring of the "genetic algorithm" functionality (cf. dedicated branch)</li>
</ol>
<p>Other suggestions welcome, as well as</p>
<ul>
<li>delineating additional and/or intermediate goals,</li>
<li>signalling potential pitfalls and/or alternative approaches to the intended goal(s).</li>
</ul></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/JAMES-3819">JAMES-3819</a></td>
<td><a href="https://issues.apache.org/jira/browse/JAMES-3819">[GSOC] James as a (distributed) MX server</a></td>
<td></td>
<td></td>
<td></td>
<td><h4 id="why">Why ?</h4>
<p>Alternatives like Postfix...</p>
<ul>
<li>Do not offer a unified view of the mail queue across nodes</li>
<li>Requires statefull persistent storage</li>
</ul>
<p>Given Apache James recent push to adopt a distributed mail queue based on Pulsar supporting delays (<a href="https://issues.apache.org/jira/browse/JAMES-3687"><del>JAMES-3687</del></a>), it starts making sense developing tooling for MX related tooling.</p>
<p>I propose myself to mentor a Gsoc on this topic.</p>
<h4 id="benefits-for-the-student">Benefits for the student</h4>
<p>At the end of this GSOC you will...</p>
<ul>
<li>Have a solid understanding of email relaying and associated mechanics</li>
<li>Understand James modular architecture (mailet/ matcher / routes)</li>
<li>Have a hands-on expertise in SQL / NoSQL working with technologies like Cassandra, Redis, JPA...</li>
<li>Identify fix and solve architecture problems.</li>
<li>Conduct performance tests and develop an operational mindset</li>
</ul>
<h4 id="inventory...">Inventory...</h4>
<p>James ships a couple of MX related tools within smtp-hooks/mailets in default packages. It would make sense to me to move those as an extension.</p>
<p>James supports today...</p>
<p><strong>checks agains DNS blacklists</strong>. `DNSRBLHandler` or `URIRBLHandler` smtp hook for instance. This can be moved as an extension IMO.</p>
<p>We would need a little performance benchmark to document performance implications of activating DNS-RBL.</p>
<p>Finally as quoted by a gitter guy: it would make more sens to have this done as a MailHook rather as a RcptHook as it would avoid doing the same job again and over again for each recipients. See <a href="https://issues.apache.org/jira/browse/JAMES-3820"><del>JAMES-3820</del></a> .</p>
<p><strong>Grey listing</strong>. There's an existing implementation using JDBC as an underlying storage.</p>
<p>Move it as an extension.</p>
<p>Remove JDBC storage, propose 2 storage possibilities: in-memory for single node, REDIS for a distributed topology.</p>
<p>Some work around <strong>whitelist mailets</strong>? Move it as an extension, propose JPA, Cassandra, and XML configured implementations ? With a route to manage entries in there for JPA + Cassandra ?</p>
<p>I would expect a student to do his <strong>own little audit</strong> and come up with extra suggestions!</p></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/JAMES-3695">JAMES-3695</a></td>
<td><a href="https://issues.apache.org/jira/browse/JAMES-3695">Adopt Pulsar as the messaging technology backing the distributed James server</a></td>
<td></td>
<td></td>
<td></td>
<td><p><a href="https://www.mail-archive.com/server-dev@james.apache.org/msg71462.html">https://www.mail-archive.com/server-dev@james.apache.org/msg71462.html</a></p>
<p>A good long term objective for the PMC is to drop RabbitMQ in<br />
favor of pulsar (third parties could package their own components using<br />
RabbitMQ if they wishes...)</p>
<p>This means:</p>
<ul>
<li>Solve the bugs that were found during the Pulsar MailQueue review</li>
<li>Pulsar MailQueue need to allow listing blobs in order to be<br />
deduplication friendly.</li>
<li>Provide an event bus based on Pulsar</li>
<li>Provide a task manager based on Pulsar</li>
<li>Package a distributed server backed by pulsar, deprecate then replace<br />
the current one.</li>
<li>(optionally) support mail queue priorities</li>
</ul>
<p>While contributions would of course be welcomed on this topic, we could<br />
offer it as part of GSOC 2022, and we could co-mentor it with mentors of<br />
the Pulsar community (see [3])</p>
<p>[3] <a href="https://lists.apache.org/thread/y9s7f6hmh51ky30l20yx0dlz458gw259">https://lists.apache.org/thread/y9s7f6hmh51ky30l20yx0dlz458gw259</a></p>
<p>Would such a plan gain traction around here ?</p></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/JAMES-1931">JAMES-1931</a></td>
<td><a href="https://issues.apache.org/jira/browse/JAMES-1931">Implement a web ui for James administration</a></td>
<td></td>
<td></td>
<td></td>
<td>James today provides a command line tool to do administration tasks like creating a domain, listing users, setting quota, etc.<br>It requires access to JMX port and even if lot of admins are confortable with such tools, to make our user base broader, we probably should expose the same commands in Rest and provide a fancy default web ui.<br>The task would need some basic skills on frontend tools to design an administration board, knowledge on what REST mean and enough Java understanding to add commands to existing Rest backend.<br>In the team, we have a strong focus on test (who want a mail server that is not tested enough ?) so we will explain and/or teach the student how to have the right test coverage of the features using modern tools like Cucumber, Selenium, rest-assured, etc.</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/IMAGING-346">IMAGING-346</a></td>
<td><a href="https://issues.apache.org/jira/browse/IMAGING-346">Placeholder for 1.0 release</a></td>
<td></td>
<td></td>
<td></td>
<td>A placeholder ticket, to link other issues and organize tasks related to the 1.0 release of Commons Imaging.<br>The 1.0 release of Commons Imaging has been postponed several times. Now we have a more clear idea of what's necessary for the 1.0 (see issues with fixVersion 1.0 and 1.0-alpha3, and other open issues), and the tasks are interesting as it involves both basic and advanced programming for tasks such as organize how test images are loaded, or work on performance improvements at byte level and following image format specifications.<br>The tasks are not too hard to follow, as normally there are example images that need to work with Imaging, as well as other libraries in C, C++, Rust, PHP, etc., that process these images correctly. Our goal with this issue is to a) improve our docs, b) improve our tests, c) fix possible security issues, d) get the parsers in Commons Imaging ready for the 1.0 release.<br>Assigning the label for GSoC 2023, and full time. Although it would be possible to work on a smaller set of tasks for 1.0 as a part time too.</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-250">GSOC-250</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-250">Apache SeaTunnel(Incubating): Http Client For SeaTunnel Zeta</a></td>
<td></td>
<td></td>
<td></td>
<td><h3 id="apache-seatunnelincubating">Apache SeaTunnel(Incubating)</h3>
<p>SeaTunnel is a very easy-to-use ultra-high-performance distributed data integration platform that supports real-time synchronization of massive data. It can synchronize tens of billions of data stably and efficiently every day, and has been used in the production of nearly 100 companies.</p>
<p>SeaTunnel provides a Connector API that does not depend on a specific execution engine. Connectors (Source, Transform, Sink) developed based on this API can run On many different engines, such as SeaTunnel Zeta, Flink, Spark that are currently supported. SeaTunnel has supported more than 100 Connectors, and the number is surging.</p>
<p>Website: <a href="https://seatunnel.apache.org/">https://seatunnel.apache.org/</a></p>
<p>GitHub: <a href="https://github.com/apache/incubator-seatunnel">https://github.com/apache/incubator-seatunnel</a></p>
<h3 id="background">Background</h3>
<p>To use SeaTunnel, the current user needs to first create and write a config file that specifies the engine that runs the job, as well as engine related parameters. Then define the Source, Transform, and Sink of the job. We hope to provide a client that allows users to define the engine, Source, Transform, and Sink information of the job run directly through code in the client without having to start with a config file. The user can then submit the job definition information through the Client, and SeaTunnel will run these jobs. After the job is submitted, the user can obtain the status of the job running through the Client. For jobs that are already running, users can use this client to manage them, such as stopping jobs, temporary jobs, and so on.</p>
<h3 id="task">Task</h3>
<p>1. Discuss with the mentors what you need to do</p>
<p>2. Learn the details of the Apache SeaTunnel project</p>
<p>3. Discuss and complete design and development</p>
<h3 id="relevant-skills">Relevant Skills</h3>
<ol>
<li>Familiar with Java, Http</li>
<li>Familiar with SeaTunnel is better</li>
</ol>
<h4 id="mentor">Mentor</h4>
<ul>
<li>Mentor: Jun Gao, Apache SeaTunnel(Incubating) PPMC Member, gaojun2048@apache.org</li>
<li>Mentor: Li Liu, Apache SeaTunnel(Incubating) Commiter, ic4y@apache.org</li>
<li>Mailing List: dev@seatunnel.apache.org</li>
</ul></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-249">GSOC-249</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-249">[SkyWalking] Build the OAP into GraalVM native image</a></td>
<td></td>
<td></td>
<td></td>
<td>Currently skywalking OAP is bundled as a tar ball when releasing, and the start time is long, we are looking for a way to distribute the binary executable in a more convenient way and speed up the bootstrap time. Now we found that GraalVM is a good fit not only it can solve the two aforementioned points but also it will bring benefits that, we can rewrite our LAL or even MAL system in the future with a more secure and isolated method, wasm, which is supported GraalVM too!<br>so this task is to adjust OAP, build it into GraalVM and make all tests in OAP passed.</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-248">GSOC-248</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-248">Apache ShenYu Gsoc 2023 - ShenYu WasmPlugin</a></td>
<td></td>
<td></td>
<td></td>
<td><h4 id="background-1">Background:{}</h4>
<p>Apache ShenYu is a Java native API Gateway for service proxy, protocol conversion and API governance. Currently, ShenYu has good scalability in the Java language. However, ShenYu's support for multiple languages is still relatively weak.</p>
<p>The wasm bytecode is designed to be encoded in a size- and load-time-efficient binary format. WebAssembly aims to execute at native speed by taking advantage of common hardware capabilities available on a wide range of platforms.</p>
<p>The goal of WasmPlugin is to be able to run wasm bytecode(<a href="https://github.com/wasmerio/wasmer-java">wasmer-java</a> is a good choice, if you find a better choice, please discuss with me), and other languages can write ShenYu plugins based on this language(such as Rust/golang/C++) as long as they can be compiled into wasm bytecode.</p>
<p>More documents on wasm and WASI are as follows:<br />
<a href="https://github.com/WebAssembly/design">https://github.com/WebAssembly/design</a><br />
<a href="https://github.com/WebAssembly/WASI">https://github.com/WebAssembly/WASI</a></p>
<h4 id="relevant-skills-1">Relevant Skills</h4>
<p>Know the use of Apache ShenYu, especially the plugin<br />
Familiar with Java and another language which can be compiled into wasm bytecode</p>
<h4 id="task-list">Task List</h4>
<p>1.develop shenyu-wasm-plugin.</p>
<p>2.write integrated test for shenyu-wasm-plugin.</p>
<p>3.write wasm plugin documentation in shenyu-website.</p>
<p><strong>Links:</strong></p>
<p>website： <a href="https://shenyu.apache.org/">https://shenyu.apache.org/</a></p>
<p>issues: <a href="https://github.com/apache/shenyu/issues/4492">https://github.com/apache/shenyu/issues/4492</a></p></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-247">GSOC-247</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-247">Apache ShardingSphere: Introduce JVM chaos to ShardingSphere</a></td>
<td></td>
<td></td>
<td></td>
<td><h2 id="apache-shardingsphere">Apache ShardingSphere</h2>
<p>Apache ShardingSphere is positioned as a Database Plus, and aims at building a standard layer and ecosystem above heterogeneous databases. It focuses on how to reuse existing databases and their respective upper layer, rather than creating a new database. The goal is to minimize or eliminate the challenges caused by underlying databases fragmentation.</p>
<p>Page: <a href="https://shardingsphere.apache.org/">https://shardingsphere.apache.org/</a><br />
Github: <a href="https://github.com/apache/shardingsphere">https://github.com/apache/shardingsphere</a></p>
<h2 id="background-2">Background</h2>
<p>There is a proposal about the background of ChaosEngineering as belows:</p>
<p>Introduce ChaosEngineering for ShardingSphere #32<br />
And we also proposed a generic controller for ShardingSphereChaos as belows:</p>
<p>[GSoC 2023] Introduce New CRD ShardingSphereChaos #272<br />
The ShardingSphereChaos controller is aiming at different chaos tests. This JVMChaos is an important one.</p>
<h2 id="task-1">Task</h2>
<p>Write several scripts to implement different JVMChaos for main features of ShardingSphere. The specific case list is as follows.</p>
<ul>
<li>Add scripts injecting chaos to DataSharding</li>
<li>Add scripts injecting chaos to ReadWritingSplitting</li>
<li>Add scripts injecting chaos to DatabaseDiscovery</li>
<li>Add scripts injecting chaos to Encryption</li>
<li>Add scripts injecting chaos to Mask</li>
<li>Add scripts injecting chaos to Shadow<br />
Basically, these scripts will cause unexpected behaviour while executing the related. DistSQL.</li>
</ul>
<h2 id="relevant-skills-2">Relevant Skills</h2>
<ul>
<li>Master Go language, Ginkgo test framework</li>
<li>Have a deep understanding of Apache ShardingSphere concepts and practices.</li>
<li>JVM byte mechanisms like ByteMan, ByteBuddy.</li>
</ul>
<h2 id="targets-files">Targets files</h2>
<p>JVMChaos Scripts - <a href="https://github.com/apache/shardingsphere-on-cloud/chaos/jvmchaos/scripts/">https://github.com/apache/shardingsphere-on-cloud/chaos/jvmchaos/scripts/</a></p>
<p>Mentor<br />
Liyao Miao, Committer of Apache ShardingSphere, miaoliyao@apache.org<br />
Chuxin Chen, Committer of Apache ShardingSphere, tuichenchuxin@apache.org</p></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-246">GSOC-246</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-246">Apache ShardingSphere: Write a converter to generate DistSQL</a></td>
<td></td>
<td></td>
<td></td>
<td><h2 id="apache-shardingsphere-1">Apache ShardingSphere</h2>
<p>Apache ShardingSphere is positioned as a Database Plus, and aims at building a standard layer and ecosystem above heterogeneous databases. It focuses on how to reuse existing databases and their respective upper layer, rather than creating a new database. The goal is to minimize or eliminate the challenges caused by underlying databases fragmentation.</p>
<p>Page: <a href="https://shardingsphere.apache.org/">https://shardingsphere.apache.org/</a><br />
Github: <a href="https://github.com/apache/shardingsphere">https://github.com/apache/shardingsphere</a></p>
<h2 id="background-3">Background</h2>
<p>Currently we try to promote StorageNode as major CRD to represent a set of storage units for ShardingSphere.</p>
<h2 id="task-2">Task</h2>
<p>The elementary task is that the storage node controller could manage the lifecycle of a set of storage units, like PostgreSQL, in kubernetes.</p>
<p>We don't hope to create another wheel like pg-operator. So consider using a predefined parameter group to generate the target CRD.</p>
<ul>
<li>[ ] Generate DistSQL according to the Golang struct `EncryptionRule`</li>
<li>[ ] Generate DistSQL according to the Golang struct `ShardingRule`</li>
<li>[ ] Generate DistSQL according to the Golang struct `ReadWriteSplittingRule`</li>
<li>[ ] Generate DistSQL according to the Golang struct `MaskRule`</li>
<li><p>[ ] Generate DistSQL according to the Golang struct `ShadowRule`</p>
<p>Relevant Skills</p></li>
</ul>
<p>1. Master Go language, Ginkgo test framework<br />
2. Have a basic understanding of Apache ShardingSphere Concepts and DistSQL</p>
<h2 id="targets-files-1">Targets files</h2>
<p>DistSQL Converter - <a href="https://github.com/apache/shardingsphere-on-cloud/blob/main/shardingsphere-operator/pkg/distsql/converter.go">https://github.com/apache/shardingsphere-on-cloud/blob/main/shardingsphere-operator/pkg/distsql/converter.go</a>, etc.</p>
<h3 id="example">Example</h3>
<p>A struct defined as below:</p>
<p>```golang<br />
type EncryptRule struct{}<br />
func (t EncryptRule) ToDistSQL() string {}<br />
```<br />
While invoking ToDistSQL() it will generate a DistSQL regarding a EncryptRule like:</p>
<p>```SQL<br />
CREATE ENCRYPT RULE t_encrypt (....<br />
```</p>
<h2 id="references">References:</h2>
<ul>
<li><a href="https://shardingsphere.apache.org/document/current/en/user-manual/shardingsphere-proxy/distsql/syntax/rdl/rule-definition/encrypt/create-encrypt-rule/">https://shardingsphere.apache.org/document/current/en/user-manual/shardingsphere-proxy/distsql/syntax/rdl/rule-definition/encrypt/create-encrypt-rule/</a></li>
</ul>
<p>Mentor<br />
Liyao Miao, Committer of Apache ShardingSphere, miaoliyao@apache.org</p>
<p>Chuxin Chen, Committer of Apache ShardingSphere, tuichenchuxin@apache.org</p></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-245">GSOC-245</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-245">Apache ShardingSphere: Introduce new CRD as StorageNode for better usability</a></td>
<td></td>
<td></td>
<td></td>
<td><h2 id="apache-shardingsphere-2">Apache ShardingSphere</h2>
<p>Apache ShardingSphere is positioned as a Database Plus, and aims at building a standard layer and ecosystem above heterogeneous databases. It focuses on how to reuse existing databases and their respective upper layer, rather than creating a new database. The goal is to minimize or eliminate the challenges caused by underlying databases fragmentation.</p>
<p>Page: <a href="https://shardingsphere.apache.org/">https://shardingsphere.apache.org/</a><br />
Github: <a href="https://github.com/apache/shardingsphere">https://github.com/apache/shardingsphere</a></p>
<h2 id="background-4">Background</h2>
<p>There is a proposal about new CRD Cluster and ComputeNode as belows:</p>
<ul>
<li>#167</li>
<li>#166</li>
</ul>
<p>Currently we try to promote StorageNode as major CRD to represent a set of storage units for ShardingSphere.</p>
<h2 id="task-3">Task</h2>
<p>The elementary task is that the storage node controller could manage the lifecycle of a set of storage units, like PostgreSQL, in kubernetes.</p>
<p>We don't hope to create another wheel like pg-operator. So consider using a predefined parameter group to generate the target CRD.</p>
<ul>
<li>[ ] Create a PostgreSQL cluster while a StorageNode with pg parameters is created</li>
<li>[ ] Update the PostgreSQL cluster while updated StorageNode</li>
<li>[ ] Delete the PostgreSQL cluster while deleted StorageNode. Notice this may need a deletion strategy.</li>
<li>[ ] Reconciling StorageNode according to the status of PostgreSQL cluster.</li>
<li>[ ] The status of StorageNode would be consumed by common storage units related DistSQLs</li>
</ul>
<h2 id="relevant-skills-3">Relevant Skills</h2>
<p>1. Master Go language, Ginkgo test framework<br />
2. Have a basic understanding of Apache ShardingSphere Concepts<br />
3. Be familiar with Kubernetes Operator, kubebuilder framework</p>
<h2 id="targets-files-2">Targets files</h2>
<p>StorageNode Controller - <a href="https://github.com/apache/shardingsphere-on-cloud/blob/main/shardingsphere-operator/pkg/controllers/storagenode_controller.go">https://github.com/apache/shardingsphere-on-cloud/blob/main/shardingsphere-operator/pkg/controllers/storagenode_controller.go</a></p>
<h4 id="mentor-1">Mentor</h4>
<p>Liyao Miao, Committer of Apache ShardingSphere, <a href="mailto:miaoliyao@apache.org">miaoliyao@apache.org<sup></sup></a></p>
<p>Chuxin Chen, Committer of Apache ShardingSphere, <a href="mailto:tuichenchuxin@apache.org">tuichenchuxin@apache.org<sup></sup></a></p></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-244">GSOC-244</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-244">Apache ShardingSphere: Introduce New CRD ShardingSphereChaos</a></td>
<td></td>
<td></td>
<td></td>
<td><h2 id="apache-shardingsphere-3">Apache ShardingSphere</h2>
<p>Apache ShardingSphere is positioned as a Database Plus, and aims at building a standard layer and ecosystem above heterogeneous databases. It focuses on how to reuse existing databases and their respective upper layer, rather than creating a new database. The goal is to minimize or eliminate the challenges caused by underlying databases fragmentation.</p>
<p>Page: <a href="https://shardingsphere.apache.org/">https://shardingsphere.apache.org/</a><br />
Github: <a href="https://github.com/apache/shardingsphere">https://github.com/apache/shardingsphere</a></p>
<h2 id="background-5">Background</h2>
<p>There is a proposal about the background of ChaosEngineering as belows:</p>
<ul>
<li><a href="https://github.com/apache/shardingsphere-on-cloud/issues/32">Introduce ChaosEngineering for ShardingSphere · Issue #32 · apache/shardingsphere-on-cloud (github.com)</a></li>
</ul>
<p>The ShardingSphereChaos controller is aiming at different chaos tests.</p>
<h2 id="task-4">Task</h2>
<p>Propose a generic controller for ShardingSphereChaos, which reconcile CRD ShardingSphereChaos, prepare, execute and verify test.</p>
<ul>
<li>[ ] Support common ShardingSphere features, prepare test rules and dataset</li>
<li>[ ] Generating chaos type according to the backend implementation</li>
<li>[ ] Verify testing result with DistSQL or other tools</li>
</ul>
<h2 id="relevant-skills-4">Relevant Skills</h2>
<p>1. Master Go language, Ginkgo test framework<br />
2. Have a deep understanding of Apache ShardingSphere concepts and practices.<br />
3. Kubernetes operator pattern, kube-builder</p>
<h2 id="targets-files-3">Targets files</h2>
<p>ShardingSphereChaos Controller - <a href="https://github.com/apache/shardingsphere-on-cloud/shardingsphere-operator/pkg/controllers/chaos_controller.go">https://github.com/apache/shardingsphere-on-cloud/shardingsphere-operator/pkg/controllers/chaos_controller.go</a>, etc.</p>
<h4 id="mentor-2">Mentor</h4>
<p>Liyao Miao, Committer of Apache ShardingSphere, <a href="mailto:miaoliyao@apache.org">miaoliyao@apache.org<sup></sup></a></p>
<p>Chuxin Chen, Committer of Apache ShardingSphere, <a href="mailto:tuichenchuxin@apache.org">tuichenchuxin@apache.org<sup></sup></a></p></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-243">GSOC-243</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-243">[GSoC][Teaclave (incubating)] Data Privacy Policy Definition and Function Verification</a></td>
<td></td>
<td></td>
<td></td>
<td><p><strong>Background</strong></p>
<p>The Apache Teaclave (incubating) is a cutting-edge solution for confidential computing, providing Function-as-a-Service (FaaS) capabilities that enable the decoupling of data and function providers. Despite its impressive functionality and security features, Teaclave currently lacks a mechanism for data providers to enforce policies on the data they upload. For example, data providers may wish to restrict access to certain columns of data for third-party function providers. Open Policy Agent (OPA) offers flexible control over service behavior and has been widely adopted by the cloud-native community. If Teaclave were to integrate OPA, data providers could apply policies to their data, enhancing Teaclave’s functionality. Another potential security loophole in Teaclave is the absence of a means to verify the expected behavior of a function. This gap leaves the system vulnerable to exploitation by malicious actors. Fortunately, most of Teaclave’s interfaces can be reused, with the exception of the function uploading phase, which may require an overhaul to address this issue. Overall, the integration of OPA and the addition of a function verification mechanism would make Teaclave an even more robust and secure solution for confidential computing.</p>
<p><strong>Benefits</strong></p>
<p>If this proposal moves on smoothly, new functionality will be added to the Teaclave project that enables the verification of the function behavior that it strictly conforms to a prescribed policy.</p>
<p><strong>Deliverables</strong></p>
<ul>
<li><strong>Milestones</strong>: Basic policies (e.g., addition, subtraction) of the data can be verified by Teaclave; Complex policies can be verified.</li>
</ul>
<ul>
<li><strong>Components</strong>: Verifier for the function code; Policy language adapters (adapt policy language to verifier); Policy language parser; Function source code converter (append policies to the functions).</li>
</ul>
<ul>
<li><strong>Documentation</strong>: The internal working mechanism of the verification; How to write policies for the data.</li>
</ul>
<p><strong>Timeline Estimation</strong></p>
<ul>
<li>0.5 month: Policy language parser and/or policy language design (if Rego is not an ideal choice).</li>
<li>1.5 − 2 months: Verification contracts rewriting on the function source code based on the policy parsed. • (∼ 1 month): The function can be properly verified formally (by, e.g., querying the Z3 SMT solver).</li>
</ul>
<p><strong>Difficulty:</strong> Major<br />
<strong>Project size:</strong> ~350 hour (large)<br />
<strong>Potential mentors:</strong><br />
Mingshen Sun, Apache Teaclave (incubating) PPMC, <a href="mailto:mssun@apache.org">mssun@apache.org<sup></sup></a></p></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-242">GSOC-242</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-242">[GSoC][Airflow] Automation for PMC</a></td>
<td></td>
<td></td>
<td></td>
<td>This is a project to implement a tool for PMC task automation.<br>This is a large project.<br>Mentor will be <a href="https://issues.apache.org/jira/secure/ViewProfile.jspa?name=aizhamal">aizhamal</a> ,</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-241">GSOC-241</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-241">[GSoC][Beam] Advancing the Rust SDK on Beam</a></td>
<td></td>
<td></td>
<td></td>
<td><p>Beam has an experimental, ongoing implementation for a Rust SDK.</p>
<p>This project involves advancing that implementation and making sure it's compiant with Beam standards.</p>
<p>Good resource materials:</p>
<ul>
<li><a href="https://lists.apache.org/thread/xg9xq0btp8k1wh2v1gpqyfhwpsyxq4ds">https://lists.apache.org/thread/xg9xq0btp8k1wh2v1gpqyfhwpsyxq4ds</a></li>
</ul>
<p>This project is large.</p></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-240">GSOC-240</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-240">[GSoC][Beam] Advancing the Beam-on-Ray runner</a></td>
<td></td>
<td></td>
<td></td>
<td><p>There is a community effort to build a Beam runner to run Beam pipelines on top of Ray: <a href="https://github.com/ray-project/ray_beam_runner/">https://github.com/ray-project/ray_beam_runner/</a></p>
<p>This involves pushing that project forward. It will require writing lots of Python code, and specifically going through the list of issues (<a href="https://github.com/ray-project/ray_beam_runner/issues)">https://github.com/ray-project/ray_beam_runner/issues)</a> and solving as many of them as possible to make sure the runner is compliant.</p>
<p>Good resource docs:</p>
<ul>
<li><a href="https://docs.google.com/document/d/1vt78s48Q0aBhaUCHrVrTUsProJSP8-EBqDDRGTPEr0Y/edit#heading=h.bhgd35otqjly">https://docs.google.com/document/d/1vt78s48Q0aBhaUCHrVrTUsProJSP8-EBqDDRGTPEr0Y/edit#heading=h.bhgd35otqjly</a></li>
<li><a href="https://docs.google.com/document/d/1k5JpMzIP-l7BssLpp6-gSNR-796ttZcACaY1p2CEFho/edit#heading=h.f5fgmvcor6lo">https://docs.google.com/document/d/1k5JpMzIP-l7BssLpp6-gSNR-796ttZcACaY1p2CEFho/edit#heading=h.f5fgmvcor6lo</a></li>
</ul>
<p>This project is large.</p></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-169">GSOC-169</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-169">Apache ShardingSphere: Add the feature of switching logging framework</a></td>
<td></td>
<td></td>
<td></td>
<td><h3 id="apache-shardingsphere-4">Apache ShardingSphere</h3>
<p>Apache ShardingSphere is positioned as a Database Plus, and aims at building a standard layer and ecosystem above heterogeneous databases. It focuses on how to reuse existing databases and their respective upper layer, rather than creating a new database. The goal is to minimize or eliminate the challenges caused by underlying databases fragmentation.</p>
<p><strong>Page</strong>: <a href="https://shardingsphere.apache.org/">https://shardingsphere.apache.org</a><br />
<strong>Github</strong>: <a href="https://github.com/apache/shardingsphere">https://github.com/apache/shardingsphere</a></p>
<h3 id="background-6">Background</h3>
<p>ShardingSphere provides two adapters: ShardingSphere-JDBC and ShardingSphere-Proxy.</p>
<p>Now, ShardingSphere uses logback for logging, but consider the following situations:</p>
<ul>
<li>Users may need to switch the logging framework to meet special needs, such as log4j2 can provide better asynchronous performance;</li>
<li>When using the JDBC adapter, the user application may not use logback, which may cause some conflicts.</li>
</ul>
<p>Why doesn't the log facade suffice? Because ShardingSphere provides users with clustered logging configurations (such as changing the log level online), this requires dynamic construction of logger, which cannot be achieved with only the log facade.</p>
<h3 id="task-5">Task</h3>
<p>1. Design and implement logging SPI to support multiple logging frameworks (such as logback and log4j2)<br />
2. Allow users to choose which logging framework to use through the <a href="https://github.com/apache/shardingsphere/tree/master/kernel/logging">logging rule</a></p>
<h3 id="relevant-skills-5">Relevant Skills</h3>
<p>1. Master JAVA language</p>
<p>2. Basic knowledge of logback and log4j2</p>
<p>3. Maven</p>
<h4 id="mentor-3">Mentor</h4>
<p>Longtao Jiang, Committer of Apache ShardingSphere, <a href="mailto:jianglongtao@apache.org">jianglongtao@apache.org<sup></sup></a></p>
<p>Trista Pan, PMC of Apache ShardingSphere, <a href="mailto:panjuan@apache.org">panjuan@apache.org<sup></sup></a></p></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-168">GSOC-168</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-168">Apache ShenYu Gsoc 2023 - ShenYu End-To-End SpringCloud plugin test case</a></td>
<td></td>
<td></td>
<td></td>
<td><h4 id="background-7">Background:</h4>
<p>Shenyu is a native API gateway for service proxy, protocol translation and API governance. but Shenyu lack of End-To-End Tests.</p>
<p><strong>Relevant skills：</strong></p>
<p>1.Understand the architecture of ShenYu</p>
<p>2.Understand SpringCloud micro-service and ShenYu SpringCloud proxy plugin.</p>
<p>3.Understand ShenYu e2e framework and architecture.</p>
<p><strong>How to coding</strong></p>
<p>1.please refer to <code>org.apache.shenyu.e2e.testcase.plugin.DividePluginCases</code></p>
<p><strong>How to test</strong></p>
<p>1.start shenyu admin in docker</p>
<p>2.start shenyu boostrap in docker</p>
<p>3.run test case <code>org.apache.shenyu.e2e.testcase.plugin.PluginsTest#testDivide</code></p>
<h4 id="task-list-1">Task List</h4>
<p>1.develop e2e tests of the springcloud plug-in.</p>
<p>2.write shenyu e2e springcloud plugin documentation in shenyu-website.</p>
<p>3.refactor the existing plugin test cases.</p>
<p><strong>Links:</strong></p>
<p>website： <a href="https://shenyu.apache.org/">https://shenyu.apache.org/</a></p>
<p>issues: <a href="https://github.com/apache/shenyu/issues/4474">https://github.com/apache/shenyu/issues/4474</a></p></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-165">GSOC-165</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-165">Apache ShardingSphere: Support mainstream database metadata table query</a></td>
<td></td>
<td></td>
<td></td>
<td><h3 id="apache-shardingsphere-5">Apache ShardingSphere</h3>
<p>Apache ShardingSphere is positioned as a Database Plus, and aims at building a standard layer and ecosystem above heterogeneous databases. It focuses on how to reuse existing databases and their respective upper layer, rather than creating a new database. The goal is to minimize or eliminate the challenges caused by underlying databases fragmentation.</p>
<p><strong>Page</strong>: <a href="https://shardingsphere.apache.org/">https://shardingsphere.apache.org</a><br />
<strong>Github</strong>: <a href="https://github.com/apache/shardingsphere">https://github.com/apache/shardingsphere</a></p>
<h3 id="background-8">Background</h3>
<p>ShardingSphere has designed its own metadata database to simulate metadata queries that support various databases.</p>
<p><strong>More details</strong>:</p>
<p><a href="https://github.com/apache/shardingsphere/issues/21268">https://github.com/apache/shardingsphere/issues/21268</a><br />
<a href="https://github.com/apache/shardingsphere/issues/22052">https://github.com/apache/shardingsphere/issues/22052</a></p>
<h3 id="task-6">Task</h3>
<ul>
<li>Support PostgreSQL And openGauss `\d tableName`</li>
<li>Support PostgreSQL And openGauss `\d+`</li>
<li>Support PostgreSQL And openGauss `\d+ tableName`</li>
<li>Support PostgreSQL And openGauss `l`</li>
<li>Support query for MySQL metadata `TABLES`</li>
<li>Support query for MySQL metadata `COLUMNS`</li>
<li>Support query for MySQL metadata `schemata`</li>
<li>Support query for MySQL metadata `ENGINES`</li>
<li>Support query for MySQL metadata `FILES`</li>
<li>Support query for MySQL metadata `VIEWS`</li>
</ul>
<p><strong>Notice</strong>, these issues can be a good example.</p>
<p><a href="https://github.com/apache/shardingsphere/pull/22053">https://github.com/apache/shardingsphere/pull/22053</a><br />
<a href="https://github.com/apache/shardingsphere/pull/22057/">https://github.com/apache/shardingsphere/pull/22057/</a><br />
<a href="https://github.com/apache/shardingsphere/pull/22166/">https://github.com/apache/shardingsphere/pull/22166/</a><br />
<a href="https://github.com/apache/shardingsphere/pull/22182">https://github.com/apache/shardingsphere/pull/22182</a></p>
<h3 id="relevant-skills-6">Relevant Skills</h3>
<ul>
<li>Master JAVA language</li>
<li>Have a basic understanding of Zookeeper</li>
<li>Be familiar with MySQL/Postgres SQLs</li>
</ul>
<h4 id="mentor-4">Mentor</h4>
<p>Chuxin Chen, Committer of Apache ShardingSphere, tuichenchuxin@apache.org</p>
<p>Zhengqiang Duan, PMC of Apache ShardingSphere, duanzhengqiang@apache.org</p></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-161">GSOC-161</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-161">Code Insights for Apache StreamPipes</a></td>
<td></td>
<td></td>
<td></td>
<td><h4 id="apache-streampipes">Apache StreamPipes</h4>
<p>Apache StreamPipes (incubating) is a self-service (Industrial) IoT toolbox to enable non-technical users to connect, analyze and explore IoT data streams. StreamPipes offers several modules including StreamPipes Connect to easily connect data from industrial IoT sources, the Pipeline Editor to quickly create processing pipelines and several visualization modules for live and historic data exploration. Under the hood, StreamPipes utilizes an event-driven microservice paradigm of standalone, so-called analytics microservices making the system easy to extend for individual needs.</p>
<h4 id="background-9">Background</h4>
<p>StreamPipes has grown significantly throughout recent years. We were able to introduce a lot of new features and attracted both users and contributors. Putting the cherry on the cake, we were graduated as an Apache top level project in December 2022. We will of course continue developing new features and never rest to make StreamPipes even more amazing. Although, since we are approaching with full stream towards our `1.0` release, we want to project also to get more mature. Therefore, we want to address one of our Achilles' heels: our test coverage.</p>
<p>Don't worry, this issue is not about implementing myriads of tests for our code base. As a first step, we would like to make the status quo transparent. That means we want to measure our code coverage consistently across the whole codebase (Backend, UI, Python library) and report the coverage to <a href="https://about.codecov.io/">codecov</a>. Furthermore, to benchmark ourselves and motivate us to provide tests with every contributing, we would like to lock the current test coverage as an lower threshold that we always want to achieve (meaning in case we drop CI builds fail etc). With time we then can increase the required coverage lever step to step.</p>
<p>More than monitoring our test coverage, we also want to invest in better and more clean code. Therefore, we would like to adopt <a href="https://www.sonarsource.com/products/sonarcloud/">sonarcloud</a> for our repository.</p>
<h4 id="tasks">Tasks</h4>
<ul>
<li>[ ] calculate test coverage for all main parts of the repo</li>
<li>[ ] send coverage to codeCov</li>
<li>[ ] determine coverage threshold and let CI fail if below</li>
<li>[ ] include sonarcloud in CI setup</li>
<li>[ ] include automatic coverage report in PR validation (see an example <a href="https://github.com/pydantic/pydantic/pull/648#issuecomment-509855300">here</a> ) -&gt; optional</li>
<li>[ ] include automatic sonarcloud report in PR validation -&gt; optional</li>
<li>[ ] what ever comes in your mind 💡 further ideas are always welcome</li>
</ul>
<h4 id="important-note">❗Important Note❗</h4>
<p>Do not create any account in behalf of Apache StreamPipes in Sonarcloud or in CodeCov or using the name of Apache StreamPipes for any account creation. Your mentor will take care of it.</p>
<h4 id="relevant-skills-7">Relevant Skills</h4>
<ul>
<li>basic knowledge about GitHub worfklows</li>
</ul>
<h4 id="learning-material">Learning Material</h4>
<ul>
<li><a href="https://docs.github.com/en/actions/using-workflows">GitHub workflow docs</a></li>
<li><a href="https://github.com/apache/streampipes/tree/dev/.github/workflows">Apache StreamPipes workflows</a></li>
<li><a href="https://docs.sonarcloud.io/advanced-setup/monorepo-support/">Sonarcloud for Monorepos</a></li>
<li>Using code cov for a monorepo: <a href="https://www.curtiscode.dev/post/tools/codecov-monorepo/">https://www.curtiscode.dev/post/tools/codecov-monorepo/</a> &amp; <a href="https://docs.codecov.com/docs/flags">https://docs.codecov.com/docs/flags</a></li>
</ul>
<p><strong>References</strong></p>
<p>You can find our corresponding issue on GitHub <a href="https://github.com/apache/streampipes/issues/1343">here</a></p>
<h4 id="name-and-contact-information">Name and Contact Information</h4>
<p>Name: Tim Bossenmaier</p>
<p>email: bossenti[at]apache.org</p>
<p>community: dev[at]streampipes.apache.org</p>
<p>website: <a href="https://streampipes.apache.org/">https://streampipes.apache.org/</a></p></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-158">GSOC-158</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-158">Apache EventMesh: Optimize the event-bridge on EventMesh</a></td>
<td></td>
<td></td>
<td></td>
<td><strong>Apache EventMesh (incubating)</strong><br>Apache EventMesh is a fully serverless platform used to build distributed event-driven applications.<br>Website: <a href="https://eventmesh.apache.org">https://eventmesh.apache.org</a><br>GitHub: <a href="https://github.com/apache/incubator-eventmesh">https://github.com/apache/incubator-eventmesh</a><br>Upstream Issue: <a href="https://github.com/apache/incubator-eventmesh/issues/3494">https://github.com/apache/incubator-eventmesh/issues/3494</a><br><strong>Background</strong><br>Through eventmesh‘s event bridge feature, we can connect data to heterogeneous data storage, we hope that the community can optimize the current eventbridge capability of EventMesh to realize the data connection of different event stores.<br><strong>Task</strong><br>1. Discuss with the mentors what you need to do<br>2. Learn the details of the Apache EventMesh project<br>3. Verify the ability of different EventMesh cluster instances to synchronize data, sort out the corresponding verification step documents, and optimize the current EventMesh bridge features<br><strong>Recommended Skills</strong><br>1. Familiar with Java<br>2. Familiar with MQ is better<br><strong>Mentor</strong><br>Eason Chen, PPMC of Apache EventMesh, <a href="https://github.com/qqeasonchen">https://github.com/qqeasonchen</a>, chenguangsheng@apache.org<br>Mike Xue, PPMC of Apache EventMesh, <a href="https://github.com/xwm1992">https://github.com/xwm1992</a>, mikexue@apache.org</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-157">GSOC-157</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-157">Apache ShardingSphere: Enhance ComputeNode reconciliation</a></td>
<td></td>
<td></td>
<td></td>
<td><h3 id="apache-shardingsphere-6">Apache ShardingSphere</h3>
<p>Apache ShardingSphere is positioned as a Database Plus, and aims at building a standard layer and ecosystem above heterogeneous databases. It focuses on how to reuse existing databases and their respective upper layer, rather than creating a new database. The goal is to minimize or eliminate the challenges caused by underlying databases fragmentation.</p>
<p>Page: <a href="https://shardingsphere.apache.org/">https://shardingsphere.apache.org/</a><br />
Github: <a href="https://github.com/apache/shardingsphere%C2%A0">https://github.com/apache/shardingsphere</a></p>
<h2 id="background-10">Background</h2>
<p>There is a proposal about new CRD Cluster and ComputeNode as belows:</p>
<ul>
<li><a href="https://github.com/apache/shardingsphere-on-cloud/issues/167">WIP: [New Feature] Introduce new CRD Cluster #167</a></li>
<li><a href="https://github.com/apache/shardingsphere-on-cloud/issues/166">[Feat] Introduce new CRD as ComputeNode for better usability #166</a></li>
</ul>
<p>Currently we try to promote ComputeNode as major CRD to represent a special ShardingSphere Proxy deployment. And plan to use Cluster indicating a special ShardingSphere Proxy cluster.</p>
<h2 id="task-7">Task</h2>
<p>This issue is to enhance ComputeNode reconciliation availability. The specific case list is as follows.</p>
<ul>
<li>Add IT test case for Deployment spec volume</li>
<li>Add IT test case for Deployment spec template init containers</li>
<li>Add IT test case for Deployment spec template spec containers</li>
<li>Add IT test case for Deployment spec volume mounts</li>
<li>Add IT test case for Deployment spec container ports</li>
<li>Add IT test case for Deployment spec container image tag</li>
<li>Add IT test case for Service spec ports</li>
<li>Add IT test case for ConfigMap data serverconfig</li>
<li>Add IT test case for ConfigMap data logback<br />
<br />
Notice, these issues can be a good example.</li>
<li><a href="https://github.com/apache/shardingsphere-on-cloud/pull/203">chore: add more Ginkgo tests for ComputeNode #203</a></li>
</ul>
<h2 id="relevant-skills-8">Relevant Skills</h2>
<ol>
<li>Master Go language, Ginkgo test framework</li>
<li>Have a basic understanding of Apache ShardingSphere Concepts</li>
<li>Be familiar with Kubernetes Operator, kubebuilder framework</li>
</ol>
<h2 id="targets-files-4">Targets files</h2>
<p>ComputeNode IT - <a href="https://github.com/apache/shardingsphere-on-cloud/blob/main/shardingsphere-operator/pkg/reconcile/computenode/compute_node_test.go">https://github.com/apache/shardingsphere-on-cloud/blob/main/shardingsphere-operator/pkg/reconcile/computenode/compute_node_test.go</a></p>
<h4 id="mentor-5">Mentor</h4>
<p>Liyao Miao, Committer of Apache ShardingSphere, <a href="mailto:miaoliyao@apache.org">miaoliyao@apache.org<sup></sup></a></p>
<p>Chuxin Chen, Committer of Apache ShardingSphere, <a href="mailto:tuichenchuxin@apache.org">tuichenchuxin@apache.org<sup></sup></a></p></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-153">GSOC-153</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-153">Apache ShardingSphere: Enhance SQLNodeConverterEngine to support more MySQL SQL statements</a></td>
<td></td>
<td></td>
<td></td>
<td><h3 id="apache-shardingsphere-7">Apache ShardingSphere</h3>
<p>Apache ShardingSphere is positioned as a Database Plus, and aims at building a standard layer and ecosystem above heterogeneous databases. It focuses on how to reuse existing databases and their respective upper layer, rather than creating a new database. The goal is to minimize or eliminate the challenges caused by underlying databases fragmentation.</p>
<p><strong>Page</strong>: <a href="https://shardingsphere.apache.org/">https://shardingsphere.apache.org</a><br />
<strong>Github</strong>: <a href="https://github.com/apache/shardingsphere">https://github.com/apache/shardingsphere</a></p>
<h3 id="background-11">Background</h3>
<p>The ShardingSphere SQL federation engine provides support for complex SQL statements, and it can well support cross-database join queries, subqueries, aggregation queries and other statements. An important part of SQL federation engine is to convert the SQL statement parsed by ShardingSphere into SqlNode, so that Calcite can be used to implement SQL optimization and federated query.</p>
<h3 id="task-8">Task</h3>
<p>This issue is to solve the MySQL exception that occurs during SQLNodeConverterEngine conversion. The specific case list is as follows.</p>
<ul>
<li>select_char</li>
<li>select_extract</li>
<li>select_from_dual</li>
<li>select_from_with_table</li>
<li>select_group_by_with_having_and_window</li>
<li>select_not_between_with_single_table</li>
<li>select_not_in_with_single_table</li>
<li>select_substring</li>
<li>select_trim</li>
<li>select_weight_string</li>
<li>select_where_with_bit_expr_with_ampersand</li>
<li>select_where_with_bit_expr_with_caret</li>
<li>select_where_with_bit_expr_with_div</li>
<li>select_where_with_bit_expr_with_minus_interval</li>
<li>select_where_with_bit_expr_with_mod</li>
<li>select_where_with_bit_expr_with_mod_sign</li>
<li>select_where_with_bit_expr_with_plus_interval</li>
<li>select_where_with_bit_expr_with_signed_left_shift</li>
<li>select_where_with_bit_expr_with_signed_right_shift</li>
<li>select_where_with_bit_expr_with_vertical_bar</li>
<li>select_where_with_boolean_primary_with_comparison_subquery</li>
<li>select_where_with_boolean_primary_with_is</li>
<li>select_where_with_boolean_primary_with_is_not</li>
<li>select_where_with_boolean_primary_with_null_safe</li>
<li>select_where_with_expr_with_and_sign</li>
<li>select_where_with_expr_with_is</li>
<li>select_where_with_expr_with_is_not</li>
<li>select_where_with_expr_with_not</li>
<li>select_where_with_expr_with_not_sign</li>
<li>select_where_with_expr_with_or_sign</li>
<li>select_where_with_expr_with_xor</li>
<li>select_where_with_predicate_with_in_subquery</li>
<li>select_where_with_predicate_with_regexp</li>
<li>select_where_with_predicate_with_sounds_like</li>
<li>select_where_with_simple_expr_with_collate</li>
<li>select_where_with_simple_expr_with_match</li>
</ul>
<p>You need to compare the difference between actual and expected, and then correct the logic in SQLNodeConverterEngine so that actual can be consistent with expected.</p>
<p>After you make changes, remember to add case to SUPPORTED_SQL_CASE_IDS to ensure it can be tested.</p>
<p><strong>Notice</strong>, these issues can be a good example.<br />
<a href="https://github.com/apache/shardingsphere/pull/15331">https://github.com/apache/shardingsphere/pull/14492</a></p>
<h3 id="relevant-skills-9">Relevant Skills</h3>
<p>1. Master JAVA language</p>
<p>2. Have a basic understanding of Antlr g4 file</p>
<p>3. Be familiar with MySQL and Calcite SqlNode</p>
<h3 id="targets-files-5">Targets files</h3>
<p>SQLNodeConverterEngineIT</p>
<p><a href="https://github.com/apache/shardingsphere/blob/master/test/it/optimizer/src/test/java/org/apache/shardingsphere/test/it/optimize/SQLNodeConverterEngineIT.java">https://github.com/apache/shardingsphere/blob/master/test/it/optimizer/src/test/java/org/apache/shardingsphere/test/it/optimize/SQLNodeConverterEngineIT.java</a></p>
<h4 id="mentor-6">Mentor</h4>
<p>Zhengqiang Duan, PMC of Apache ShardingSphere, duanzhengqiang@apache.org</p>
<p>Chuxin Chen, Committer of Apache ShardingSphere, <a href="mailto:tuichenchuxin@apache.org">tuichenchuxin@apache.org<sup></sup></a></p>
<p>Trista Pan, PMC of Apache ShardingSphere, panjuan@apache.org</p></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-151">GSOC-151</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-151">Apache EventMesh: Optimize the eventmesh-admin of EventMesh</a></td>
<td></td>
<td></td>
<td></td>
<td><strong>Apache EventMesh (incubating)</strong><br>Apache EventMesh is a fully serverless platform used to build distributed event-driven applications.<br>Website: <a href="https://eventmesh.apache.org">https://eventmesh.apache.org</a><br>GitHub: <a href="https://github.com/apache/incubator-eventmesh">https://github.com/apache/incubator-eventmesh</a><br>Upstream Issue: <a href="https://github.com/apache/incubator-eventmesh/issues/3495">https://github.com/apache/incubator-eventmesh/issues/3495</a><br><strong>Background</strong><br>At present, eventmesh-admin provides a management interface for eventmesh storage, but it only implements the management function of rocketmq, which needs to be further expanded. At the same time, it can provide CLI for users to quickly start and experience.<br><strong>Task</strong><br>1. Discuss with the mentors what you need to do<br>2. Learn the details of the Apache EventMesh project<br>3. Implement the management interface for other eventmesh storage<br>4. Support the CLI for quick start the eventmesh<br><strong>Recommended Skills</strong><br>1. Familiar with Java<br>2. Familiar with MQ is better<br><strong>Mentor</strong><br>Eason Chen, PPMC of Apache EventMesh, <a href="https://github.com/qqeasonchen">https://github.com/qqeasonchen</a>, chenguangsheng@apache.org<br>Mike Xue, PPMC of Apache EventMesh, <a href="https://github.com/xwm1992">https://github.com/xwm1992</a>, mikexue@apache.org</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-150">GSOC-150</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-150">OPC-UA browser for Apache StreamPipes</a></td>
<td></td>
<td></td>
<td></td>
<td><h4 id="apache-streampipes-1">Apache StreamPipes</h4>
<p>Apache StreamPipes (incubating) is a self-service (Industrial) IoT toolbox to enable non-technical users to connect, analyze and explore IoT data streams. StreamPipes offers several modules including StreamPipes Connect to easily connect data from industrial IoT sources, the Pipeline Editor to quickly create processing pipelines and several visualization modules for live and historic data exploration. Under the hood, StreamPipes utilizes an event-driven microservice paradigm of standalone, so-called analytics microservices making the system easy to extend for individual needs.</p>
<h4 id="background-12">Background</h4>
<p>StreamPipes is grown significantly throughout recent years. We were able to introduce a lot of new features and attracted both users and contributors. Putting the cherry on the cake, we were graduated as an Apache top level project in December 2022. We will of course continue developing new features and never rest to make StreamPipes even more amazing.</p>
<p>StreamPipes really shines when connecting Industrial IoT data. Such data sources typically originate from machine controllers, called PLCs (e.g., Siemens S7). But there are also new protocols such as OPC-UA which allow to browse available data within the controller. Our goal is to make connectivity of industrial data sources a matter of minutes.</p>
<p>Currently, data sources can be connected using the built-in module `StreamPipes Connect` from the UI. We provide a set of adapters for popular protocols that can be customized, e.g., connection details can be added.</p>
<p>To make it even easier to connect industrial data sources with StreamPipes, we plan to add an OPC-UA browser. This will be part of the entry page of StreamPipes connect and should allow users to enter connection details of an existing OPC-UA server. Afterwards, a new view in the UI shows available data nodes from the server, their status and current value. Users should be able to select values that should be part of a new adapter. Afterwards, a new adapter can be created by reusing the current workflow to create an OPC-UA data source.</p>
<p>This is a really cool project for participants interested in full-stack development who would like to get a deeper understanding of industrial IoT protocols. Have fun!</p>
<h4 id="tasks-1">Tasks</h4>
<ul>
<li>[ ] get familiar with the OPC-UA protocol</li>
<li>[ ] develop mockups which demonstrate the user workflow</li>
<li>[ ] develop a data model for discovering data from OPC-UA</li>
<li>[ ] create the backend business logic for the OPC-UA browser</li>
<li>[ ] create the frontend views to asynchronously browse data and to create a new adapter</li>
<li>[ ] write Junit, Component and E2E tests</li>
<li>[ ] what ever comes in your mind 💡 further ideas are always welcome</li>
</ul>
<h4 id="relevant-skills-10">Relevant Skills</h4>
<ul>
<li>interest in Industrial IoT and procotols such as OPC-UA</li>
</ul>
<ul>
<li>Java development skills</li>
<li>Angular/Typescript development skills</li>
</ul>
<p>Anyways, the most important relevant skill is motivation and readiness to learn during the project!</p>
<h4 id="learning-material-1">Learning Material</h4>
<ul>
<li>StreamPipes documentation (<a href="https://streampipes.apache.org/docs/docs/user-guide-introduction.html">https://streampipes.apache.org/docs/docs/user-guide-introduction.html</a>)</li>
<li>[ur current OPC-UA adapter (<a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters-iiot/src/main/java/org/apache/streampipes/connect/iiot/adapters/opcua">https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters-iiot/src/main/java/org/apache/streampipes/connect/iiot/adapters/opcua</a>)</li>
<li>Eclipse Milo, which we currently use for OPC-UA connectivity (<a href="https://github.com/eclipse/milo">https://github.com/eclipse/milo</a>)</li>
<li>Apache PLC4X, which has an API for browsing (<a href="https://plc4x.apache.org/">https://plc4x.apache.org/)</a></li>
</ul>
<h4 id="reference">Reference</h4>
<p>Github issue can be found here: <a href="https://github.com/apache/streampipes/issues/1390">https://github.com/apache/streampipes/issues/1390</a></p>
<h4 id="name-and-contact-information-1">Name and contact information</h4>
<ul>
<li>Mentor: Dominik Riemer (riemer[at]apache.org).</li>
<li>Mailing list: (dev[at]streampipes.apache.org)</li>
<li>Website: streampipes.apache.org</li>
</ul></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-144">GSOC-144</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-144">Apache EventMesh: EventMesh official website docs by version and demo show</a></td>
<td></td>
<td></td>
<td></td>
<td><strong>Apache EventMesh (incubating)</strong><br>Apache EventMesh is a fully serverless platform used to build distributed event-driven applications.<br>Website: <a href="https://eventmesh.apache.org/">https://eventmesh.apache.org</a><br>GitHub: <a href="https://github.com/apache/incubator-eventmesh">https://github.com/apache/incubator-eventmesh</a><br>Upstream Issue: <a href="https://github.com/apache/incubator-eventmesh/issues/3327">https://github.com/apache/incubator-eventmesh/issues/3488</a><br><strong>Background</strong><br>We hope that the community can contribute to the maintenance of documents, including the archiving of Chinese and English content of documents of different release versions, the maintenance of official website documents, the improvement of project quick start documents, feature introduction, etc.<br><strong>Task</strong><br>1.Discuss with the mentors what you need to do<br>2. Learn the details of the Apache EventMesh project<br>3. Improve and supplement the content of documents on GitHub, maintain official website documents, record eventmesh quick user experience, and feature display videos<br><strong>Recommended Skills</strong><br>1.Familiar with MarkDown<br>2. Familiar with Java\Go<br><strong>Mentor</strong><br>Eason Chen, PPMC of Apache EventMesh, <a href="https://github.com/qqeasonchen">https://github.com/qqeasonchen</a>, chenguangsheng@apache.org<br>Mike Xue, PPMC of Apache EventMesh, <a href="https://github.com/xwm1992">https://github.com/xwm1992</a>, mikexue@apache.org</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-140">GSOC-140</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-140">Apache ShardingSphere: Add ShardingSphere Kafka source connector</a></td>
<td></td>
<td></td>
<td></td>
<td><h3 id="apache-shardingsphere-8">Apache ShardingSphere</h3>
<p>Apache ShardingSphere is positioned as a Database Plus, and aims at building a standard layer and ecosystem above heterogeneous databases. It focuses on how to reuse existing databases and their respective upper layer, rather than creating a new database. The goal is to minimize or eliminate the challenges caused by underlying databases fragmentation.</p>
<p><strong>Page</strong>: <a href="https://shardingsphere.apache.org/">https://shardingsphere.apache.org</a><br />
<strong>Github</strong>: <a href="https://github.com/apache/shardingsphere">https://github.com/apache/shardingsphere</a></p>
<h3 id="background-13">Background</h3>
<p>The community just added CDC (change data capture) <a href="https://github.com/apache/shardingsphere/issues/22500">feature</a> recently. Change feed will be published in created network connection after logging in, then it could be consumed.</p>
<p>Since Kafka is popular distributed event streaming platform, it's useful to import change feed into Kafka for later processing.</p>
<h3 id="task-9">Task</h3>
<ol>
<li>Familiar with ShardingSphere CDC client usage, create publication and subscribe change feed.</li>
<li>Familiar with Kafka connector development, develop source connector, integrate with ShardingSphere CDC. Persist change feed to Kafka topics properly.</li>
<li>Add unit test and E2E integration test.</li>
</ol>
<h3 id="relevant-skills-11">Relevant Skills</h3>
<ol>
<li>Java language</li>
<li>Basic knowledge of CDC and Kafka</li>
<li>Maven</li>
</ol>
<h3 id="references-1">References</h3>
<ul>
<li><a href="https://github.com/apache/shardingsphere/issues/22500">https://github.com/apache/shardingsphere/issues/22500</a></li>
<li><a href="https://kafka.apache.org/documentation/#connect_development">https://kafka.apache.org/documentation/#connect_development</a></li>
<li><a href="https://github.com/apache/kafka/tree/trunk/connect/file/src">https://github.com/apache/kafka/tree/trunk/connect/file/src</a></li>
<li><a href="https://github.com/confluentinc/kafka-connect-jdbc">https://github.com/confluentinc/kafka-connect-jdbc</a></li>
</ul>
<h3 id="local-test-steps">Local Test Steps</h3>
<ol>
<li>Modify `conf/server.yaml`, uncomment `cdc-server-port: 33071` to enable CDC. (Refer to step 2)</li>
<li>Configure proxy, refer to `Prerequisites` and `Procedure` in <a href="https://shardingsphere.apache.org/document/5.3.1/en/user-manual/shardingsphere-proxy/migration/build/">build</a> to configure proxy (Newer version could be used too, current stable version is 5.3.1).</li>
<li>Start proxy server, it'll start CDC server too.</li>
<li>Download ShardingSphere source code from <a href="https://github.com/apache/shardingsphere">https://github.com/apache/shardingsphere</a> , modify and run `org.apache.shardingsphere.data.pipeline.cdc.client.example.Bootstrap`. It'll print `records:` by default in `Bootstrap`.</li>
<li>Execute some ISNERT/UPDATE/DELETE SQLs in proxy to generate change feed, and then check in `Bootstrap` console.</li>
</ol>
<h3 id="mentor-7">Mentor</h3>
<p>Hongsheng Zhong, PMC of Apache ShardingSphere, zhonghongsheng@apache.org</p>
<p>Xinze Guo, Committer of Apache ShardingSphere, azexin@apache.org</p></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-134">GSOC-134</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-134">Improving End-to-End Test Infrastructure of Apache StreamPipes</a></td>
<td></td>
<td></td>
<td></td>
<td><h4 id="apache-streampipes-2">Apache StreamPipes</h4>
<p>Apache StreamPipes (incubating) is a self-service (Industrial) IoT toolbox to enable non-technical users to connect, analyze and explore IoT data streams. StreamPipes offers several modules including StreamPipes Connect to easily connect data from industrial IoT sources, the Pipeline Editor to quickly create processing pipelines and several visualization modules for live and historic data exploration. Under the hood, StreamPipes utilizes an event-driven microservice paradigm of standalone, so-called analytics microservices making the system easy to extend for individual needs.</p>
<h4 id="background-14">Background</h4>
<p>StreamPipes has grown significantly over the past few years, with new features and contributors joining the project. However, as the project continues to evolve, e2e test coverage must also be improved to ensure that all features remain functional. Modern frameworks, such as Cypress, make it quite easy and fun to automatically test even complex application functionalities. As StreamPipes approaches its 1.0 release, it is important to improve e2e testing to ensure the robustness of the project and its use in real-world scenarios.</p>
<h4 id="tasks-2">Tasks</h4>
<ul>
<li>[ ] Write e2e tests using Cypress to cover most functionalities and user interface components of StreamPipes.</li>
<li>[ ] Add more complex testing scenarios to ensure the reliability and robustness of StreamPipes in real-world use cases (e.g. automated tests for version updates)</li>
<li>[ ] Add e2e tests for the new Python client to ensure its integration with the main system and its functionalities ([#774 | <a href="https://github.com/apache/streampipes/issues/774">https://github.com/apache/streampipes/issues/774</a>]])</li>
<li><p>[ ] Document the testing infrastructure and the testing approach to allow for easy maintenance and future contributions.</p>
<h4 id="important-note-1">❗ ***Important Note*** ❗</h4></li>
</ul>
<p>Do not create any account on behalf of Apache StreamPipes in Cypress or using the name of Apache StreamPipes for any account creation. Your mentor will take care of it.</p>
<h4 id="relevant-skills-12">Relevant Skills</h4>
<ul>
<li>Familiarity with testing frameworks, such as Cypress or Selenium</li>
<li>Experience with TypeScript or Java</li>
<li>Basic knowledge of Angular is helpful</li>
<li><p>Familiarity with Docker and containerization is a plus</p>
<h4 id="learning-material-2">Learning Material</h4></li>
</ul>
<ul>
<li><a href="https://docs.cypress.io/guides/getting-started/installing-cypress">Cypress docs</a></li>
<li><a href="https://learn.cypress.io/">Learn Cypress</a></li>
<li><a href="https://angular.io/docs">Angular docs</a></li>
</ul>
<p><strong>References</strong></p>
<p>You can find our corresponding issue on GitHub <a href="https://github.com/apache/streampipes/issues/1371">here</a></p>
<h4 id="name-and-contact-information-2">Name and Contact Information</h4>
<p>Name: Philipp Zehnder</p>
<p>email: zehnder[at]apache.org</p>
<p>community: dev[at]streampipes.apache.org</p>
<p>website: <a href="https://streampipes.apache.org/">https://streampipes.apache.org/</a></p></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-132">GSOC-132</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-132">[GSoC] [RocketMQ] The performance tuning of RocketMQ proxy</a></td>
<td></td>
<td></td>
<td></td>
<td><h4 id="apache-rocketmq">Apache RocketMQ</h4>
<p>Apache RocketMQ is a distributed messaging and streaming platform with low latency, high performance and reliability, trillion-level capacity, and flexible scalability.</p>
<p>Page: <a href="https://rocketmq.apache.org">https://rocketmq.apache.org</a><br />
Repo: <a href="https://github.com/apache/rocketmq">https://github.com/apache/rocketmq</a></p>
<h4 id="background-15">Background</h4>
<p>RocketMQ 5.0 has released a new module called `proxy`, which supports gRPC and remoting protocol. Additionally, it can be deployed in two modes, namely Local and Cluster modes. The performance tuning task will provide contributors with a comprehensive understanding of Apache RocketMQ and its intricate data flow, presenting a unique opportunity for beginners to acquaint themselves with and actively participate in our community.</p>
<h4 id="task-10">Task</h4>
<p>The task is to tune RocketMQ proxy for optimal performance involves latency and throughput. possess a thorough knowledge of Java implementation and possess the ability to fine-tune Netty, gRPC, the operating system, and RocketMQ itself. We anticipate that the developer responsible for this task will provide a performance report about measurements of both latency and throughput.</p>
<h4 id="relevant-skills-13">Relevant Skills</h4>
<p>Basic knowledge of RocketMQ 5.0, Netty, gRPC, and operating system.</p>
<p>Mailing List: <a href="mailto:dev@rocketmq.apache.org">dev@rocketmq.apache.org<sup></sup></a><br />
<br />
Mentor<br />
Zhouxiang Zhan, committer of Apache RocketMQ, <a href="mailto:zhouxzhan@apache.org">zhouxzhan@apache.org<sup></sup></a></p></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-131">GSOC-131</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-131">[GSoC][Doris]Page Cache Improvement</a></td>
<td></td>
<td></td>
<td></td>
<td><p><strong>Apache Doris</strong><br />
Apache Doris is a real-time analytical database based on MPP architecture. As a unified platform that supports multiple data processing scenarios, it ensures high performance for low-latency and high-throughput queries, allows for easy federated queries on data lakes, and supports various data ingestion methods.<br />
<strong>Page</strong>: <a href="https://doris.apache.org/">https://doris.apache.org</a></p>
<p><strong>Github</strong>: <a href="https://github.com/apache/doris">https://github.com/apache/doris</a></p>
<h4 id="background-16">Background</h4>
<p>Apache Doris accelerates high-concurrency queries utilizing page cache, where the decompressed data is stored.<br />
Currently, the page cache in Apache Doris uses a simple LRU algorithm, which reveals a few problems:</p>
<ul>
<li>Hot data will be phased out in large queries</li>
<li>The page cache configuration is immutable and does not support GC.</li>
</ul>
<h4 id="task-11">Task</h4>
<ul>
<li><strong>Phase One</strong>: Identify the impacts on queries when the decompressed data is stored in memory and SSD, respectively, and then determine whether full page cache is required.</li>
</ul>
<ul>
<li><strong>Phase Two</strong>: Improve the cache strategy for Apache Doris based on the results from Phase One.</li>
</ul>
<h4 id="learning-material-3">Learning Material</h4>
<p><strong>Page</strong>: <a href="https://doris.apache.org/">https://doris.apache.org</a><br />
<strong>Github</strong>: <a href="https://github.com/apache/doris">https://github.com/apache/doris</a></p>
<h4 id="mentor-8">Mentor</h4>
<ul>
<li>Mentor: Yongqiang Yang, Apache Doris PMC member &amp; Committer, <a href="mailto:yangyongqiang@apache.org">yangyongqiang@apache.org <sup></sup></a></li>
<li>Mentor: Haopeng Li, Apache Doris PMC member &amp; Committer, <a href="mailto:lihaopeng@apache.org">lihaopeng@apache.org<sup></sup></a></li>
<li>Mailing List: dev@doris.apache.org</li>
</ul></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-130">GSOC-130</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-130">Apache ShenYu Gsoc 2023 - Design license scanning function</a></td>
<td></td>
<td></td>
<td></td>
<td><p><strong>Background</strong></p>
<p>At present, shenyu needs to manually check whether the license is correct one by one when releasing the version.</p>
<p><strong>Tasks</strong></p>
<ol>
<li>Discuss with the tutor to complete the requirement design and technical design of the scanning license.</li>
<li>Finished scanning the initial version of the license.</li>
<li>Complete the corresponding test.</li>
</ol>
<p><strong>Relevant Skills</strong></p>
<ol>
<li>Familiar with Java.</li>
</ol></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-129">GSOC-129</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-129">[GSOC] [SkyWalking] Unify query planner and executor in BanyanDB</a></td>
<td></td>
<td></td>
<td></td>
<td><h4 id="background-17">Background</h4>
<p>SkyWalking BanyanDB is an observability database, aims to ingest, analyze and store Metrics, Tracing and Logging data.</p>
<h4 id="objectives">Objectives</h4>
<ol>
<li>Fully unify/merge the query planner and executor for Measure and TopN</li>
</ol>
<h4 id="recommended-skills">Recommended Skills</h4>
<ol>
<li>Familiar with Go</li>
<li>Have a basic understanding of database query engine</li>
<li>Have an experience of Apache SkyWalking</li>
</ol>
<h4 id="mentor-9">Mentor</h4>
<ul>
<li>Mentor: Jiajing Lu, Apache SkyWalking PMC, <a href="mailto:lujiajing@apache.org">lujiajing@apache.org<sup></sup></a></li>
<li>Mentor: Hongtao Gao, Apache SkyWalking PMC, Apache ShardingSphere PMC, <a href="mailto:hanahmily@apache.org">hanahmily@apache.org<sup></sup></a></li>
<li>Mailing List: dev@skywalking.apache.org</li>
</ul></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-126">GSOC-126</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-126">GSoC: Observability Improvement for RocketMQ Streams</a></td>
<td></td>
<td></td>
<td></td>
<td><h3 id="rocketmq-streams">RocketMQ Streams</h3>
<p>RocketMQ Streams is a lightweight stream processing framework, application gains the stream processing ability by depending on RocketMQ Streams as an SDK.</p>
<h3 id="background-18">Background</h3>
<p>Repo of RocketMQ Streams: <a href="https://github.com/apache/rocketmq-streams">https://github.com/apache/rocketmq-streams</a><br />
The architecture document of RocketMQ Streams: <a href="https://mp.weixin.qq.com/s?__biz=Mzg2NDcxMzgzMA==&amp;mid=2247486386&amp;idx=1&amp;sn=198722f8ba0c65d8a06bcc6c23f42f86&amp;chksm=ce6466bbf913efad859a4a643475d2f2eb2cfe5e351c4e332f40797aab78adebc202af8ff386&amp;scene=21#wechat_redirect">RocketMQ Streams examples,</a></p>
<p><a href="https://mp.weixin.qq.com/s?__biz=Mzg2NDcxMzgzMA==&amp;mid=2247486423&amp;idx=1&amp;sn=b9b1ac3a9492f951f7ddf8ed50a53097&amp;chksm=ce6466def913efc8fc39fc5e26d59b53996cebf0c76fb7a162892cb1803a69501e070c30b083&amp;token=1627591522&amp;lang=zh_CN#rd">architecture doc</a></p>
<h3 id="task-12">Task</h3>
<p>The observability needs to be enhanced in the following aspects:</p>
<ul>
<li>The metric of client/processor/thread/state/rocksdb;</li>
<li>The topology of streaming process;</li>
<li>Mutli-output of metrics;</li>
</ul>
<p>This task need you to study the implementation details of RocketMQ Streams streams, and find out the key indicators in the stream processing process. Design and implement a complete set of observability solutions, and finally use it to complete runtime problem diagnosis;</p>
<h3 id="mentor-10">Mentor</h3>
<p>nize, Committer of of Apache RocketMQ, <a href="mailto:karp@apache.org">karp@apache.org<sup></sup></a></p></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-124">GSOC-124</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-124">[GSOC] [SkyWalking] Pending Task on K8s</a></td>
<td></td>
<td></td>
<td></td>
<td>Apache SkyWalking is an application performance monitor tool for distributed systems, especially designed for microservices, cloud native and container-based (Kubernetes) architectures. This task is about a pending task on K8s.</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-123">GSOC-123</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-123">Add server indicator if a server is a cache</a></td>
<td></td>
<td></td>
<td></td>
<td><a href="https://github.com/apache/trafficcontrol/issues/7076">https://github.com/apache/trafficcontrol/issues/7076</a></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-122">GSOC-122</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-122">GSoC: Integrate RocketMQ 5.0 client with Spring</a></td>
<td></td>
<td></td>
<td></td>
<td><h3 id="apache-rocketmq-1">Apache RocketMQ</h3>
<p>Apache RocketMQ is a distributed messaging and streaming platform with low latency, high performance and reliability, trillion-level capacity and flexible scalability.</p>
<p><strong>Page</strong>: <a href="https://rocketmq.apache.org/">https://rocketmq.apache.org</a><br />
<strong>Github</strong>: <a href="https://github.com/apache/rocketmq">https://github.com/apache/rocketmq</a></p>
<h3 id="background-19">Background</h3>
<p>RocketMQ 5.0 client has been released recently, we need to integrate it with Spring.</p>
<p>Related issue: <a href="https://github.com/apache/rocketmq-clients/issues/275">https://github.com/apache/rocketmq-clients/issues/275</a></p>
<h3 id="task-13">Task</h3>
<ol>
<li>Familiar with RocketMQ 5.0 java client usage, you could see more details from <a href="https://github.com/apache/rocketmq-clients/tree/master/java">https://github.com/apache/rocketmq-clients/tree/master/java</a> and <a href="https://rocketmq.apache.org/docs/quickStart/01quickstart">https://rocketmq.apache.org/docs/quickStart/01quickstart</a></li>
<li>Integrate with Spring.</li>
</ol>
<h3 id="relevant-skills-14">Relevant Skills</h3>
<ol>
<li>Java language</li>
<li>Basic knowledge of RocketMQ 5.0</li>
<li>Spring</li>
</ol>
<h4 id="mentor-11">Mentor</h4>
<p>Rongtong Jin, PMC of Apache RocketMQ, <a href="mailto:jinrongtong@apache.org">jinrongtong@apache.org<sup></sup></a></p>
<p>Yangkun Ai, PMC of Apache RocketMQ, <a href="mailto:aaronai@apache.org">aaronai@apache.org<sup></sup></a></p></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-121">GSOC-121</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-121">[GSoC][Doris] Supports BigQuery/Apache Kudu/Apache Cassandra/Apache Druid in Federated Queries</a></td>
<td></td>
<td></td>
<td></td>
<td><p><strong>Apache Doris</strong><br />
Apache Doris is a real-time analytical database based on MPP architecture. As a unified platform that supports multiple data processing scenarios, it ensures high performance for low-latency and high-throughput queries, allows for easy federated queries on data lakes, and supports various data ingestion methods.<br />
Page: <a href="https://doris.apache.org/">https://doris.apache.org</a><br />
Github: <a href="https://github.com/apache/doris">https://github.com/apache/doris</a></p>
<h4 id="background-20">Background</h4>
<p>Apache Doris supports acceleration of queries on external data sources to meet users' needs for federated queries and analysis.<br />
Currently, Apache Doris supports multiple external catalogs including those from Hive, Iceberg, Hudi, and JDBC. Developers can connect more data sources to Apache Doris based on a unified framework.</p>
<h5 id="objective">Objective</h5>
<ul>
<li>Enable Apache Doris to access one or more of these data sources via the Multi-Catalog feature: BigQuery/Kudu/Cassandra/Druid;</li>
<li>Compile relevant documentation. See an example here: <a href="https://doris.apache.org/docs/dev/lakehouse/multi-catalog/hive">https://doris.apache.org/docs/dev/lakehouse/multi-catalog/hive</a></li>
</ul>
<p><strong>Task</strong><br />
<strong>Phase One</strong>:</p>
<ul>
<li>Get familiar with the Multi-Catalog structure of Apache Doris, including the metadata synchronization mechanism in FE and the data reading mechanism of BE.</li>
<li>Investigate how metadata should be acquired and how data access works regarding the picked data source(s); produce the corresponding design documentation.</li>
</ul>
<p><strong>Phase Two</strong>:</p>
<ul>
<li>Develop connections to the picked data source(s) and implement access to metadata and data.</li>
</ul>
<h4 id="learning-material-4">Learning Material</h4>
<p><strong>Page</strong>: <a href="https://doris.apache.org/">https://doris.apache.org</a><br />
<strong>Github</strong>: <a href="https://github.com/apache/doris">https://github.com/apache/doris</a></p>
<h4 id="mentor-12">Mentor</h4>
<ul>
<li>Mentor: Mingyu Chen, Apache Doris PMC Member &amp; Committer, <a href="mailto:yangyongqiang@apache.org">morningman@apache.org <sup></sup></a></li>
<li>Mentor: Calvin Kirs, Apache Geode PMC &amp; Committer, <a href="mailto:CalvinKirs@apache.org">Kirs@apache.org<sup></sup></a></li>
<li>Mailing List: dev@doris.apache.org</li>
</ul></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-120">GSOC-120</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-120">[GSoC][Doris]Dictionary Encoding Acceleration</a></td>
<td></td>
<td></td>
<td></td>
<td><p><strong>Apache Doris</strong><br />
Apache Doris is a real-time analytical database based on MPP architecture. As a unified platform that supports multiple data processing scenarios, it ensures high performance for low-latency and high-throughput queries, allows for easy federated queries on data lakes, and supports various data ingestion methods.<br />
<strong>Page</strong>: <a href="https://doris.apache.org/">https://doris.apache.org</a></p>
<p><strong>Github</strong>: <a href="https://github.com/apache/doris">https://github.com/apache/doris</a></p>
<h4 id="background-21">Background</h4>
<p>In Apache Doris, dictionary encoding is performed during data writing and compaction. Dictionary encoding will be implemented on string data types by default. The dictionary size of a column for one segment is 1M at most. The dictionary encoding technology accelerates strings during queries, converting them into INT, for example.</p>
<h4 id="task-14">Task</h4>
<ul>
<li>Phase One: Get familiar with the implementation of Apache Doris dictionary encoding; learning how Apache Doris dictionary encoding accelerates queries.</li>
<li>Phase Two: Evaluate the effectiveness of full dictionary encoding and figure out how to optimize memory in such a case.</li>
</ul>
<h4 id="learning-material-5">Learning Material</h4>
<p><strong>Page</strong>: <a href="https://doris.apache.org/">https://doris.apache.org</a><br />
<strong>Github</strong>: <a href="https://github.com/apache/doris">https://github.com/apache/doris</a></p>
<h4 id="mentor-13">Mentor</h4>
<ul>
<li>Mentor: Chen Zhang, Apache Doris Committer, <a href="mailto:yangyongqiang@apache.org">zhangchen@apache.org <sup></sup></a></li>
<li>Mentor: Zhijing Lu, Apache Doris Committer, <a href="mailto:lihaopeng@apache.org">luzhijing@apache.org<sup></sup></a></li>
<li>Mailing List: dev@doris.apache.org</li>
</ul></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-118">GSOC-118</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-118">[GSOC][SkyWalking] Add Terraform provider for Apache SkyWalking</a></td>
<td></td>
<td></td>
<td></td>
<td>Now the deployment methods for SkyWalking are limited, we only have Helm Chart for users to deploy in Kubernetes, other users that are not using Kubernetes have to do all the house keeping stuffs to set up SkyWalking on, for example, VM.<br>This issue aims to add a Terraform provider, so that users can conveniently spin up a cluster for demonstration or testing, we should evolve the provider and allow users to customize as their need and finally users can use this in their production environment.<br>In this task, we will mainly focus on the support for AWS. In the Terraform provider, users need to provide their access key / secret key, and the provider does the rest stuffs: create VMs, create database/OpenSearch or RDS, download SkyWalking tars, configure the SkyWalking, and start the SkyWalking components (OAP/UI), create public IPs/domain name, etc.</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-117">GSOC-117</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-117">GSoC: Make RocketMQ support higher versions of Java</a></td>
<td></td>
<td></td>
<td></td>
<td><h3 id="apache-rocketmq-2">Apache RocketMQ</h3>
<p>Apache RocketMQ is a distributed messaging and streaming platform with low latency, high performance and reliability, trillion-level capacity and flexible scalability.</p>
<p><strong>Page</strong>: <a href="https://rocketmq.apache.org/">https://rocketmq.apache.org</a><br />
<strong>Github</strong>: <a href="https://github.com/apache/rocketmq">https://github.com/apache/rocketmq</a></p>
<h3 id="background-22">Background</h3>
<p>RocketMQ is a widely used message middleware system in the Java community, which mainly supports Java8. As Java has evolved many new features and improvements have been added to the language and the Java Virtual Machine (JVM). However, RocketMQ still lacks compatibility with the latest Java versions, preventing users from taking advantage of new features and performance improvements. Therefore, we are seeking community support to upgrade RocketMQ to support higher versions of Java and enable the use of new features and JVM parameters.</p>
<h3 id="task-15">Task</h3>
<p>We aim to update the RocketMQ codebase to support newer versions of Java in a cross-compile manner. The goal is to enable RocketMQ to work with Java17, while maintaining backward compatibility with previous versions of Java. This will involve identifying and updating any dependencies that need to be changed to support the new Java versions, as well as testing and verifying that the new version of RocketMQ works correctly. With these updates, users will be able to take advantage of the latest Java features and performance improvements. We hope that the community can come together to support this task and make RocketMQ a more versatile and powerful middleware system.</p>
<h3 id="relevant-skills-15">Relevant Skills</h3>
<ol>
<li>Java language</li>
<li>Having a good understanding of the new features in higher versions of Java, particularly LTS versions.</li>
</ol>
<h4 id="mentor-14">Mentor</h4>
<p>Yangkun Ai, PMC of Apache RocketMQ, <a href="mailto:aaronai@apache.org">aaronai@apache.org<sup></sup></a></p></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-115">GSOC-115</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-115">RocketMQ DLedger Controller Performance Optimization</a></td>
<td></td>
<td></td>
<td></td>
<td><p><strong>Apache RocketMQ</strong></p>
<p>Apache RocketMQ is a distributed messaging and streaming platform with low latency, high performance and reliability, trillion-level capacity, and flexible scalability.<br />
Page: <a href="https://rocketmq.apache.org/">https://rocketmq.apache.org</a><br />
Repo: <a href="https://github.com/apache/rocketmq">https://github.com/apache/rocketmq</a></p>
<p><strong>Background</strong></p>
<p>RocketMQ 5.0 introduced a new component, the controller, which controls the high availability master-slave switch in multi-replica scenarios. It uses the DLedger Raft library as a consensus replication state machine for metadata. As a completely independent component, it can run normally in some scenarios, but in large-scale clusters, it is necessary to maintain a large number of broker groups, which is a great challenge for operational capabilities and resource waste. When dealing with a large number of Broker groups, we need to optimize performance in large-scale scenarios, leveraging the high-performance writing of DLedger itself and performing some optimization for the current Controller architecture.</p>
<p><strong>Task</strong></p>
<p>1. Polish the usage of DLedger</p>
<p>Currently, on the Controller side, a task queue single thread is used for requesting reads and writes to DLedger, that is, only one read/write request can be processed at a time. However, DLedger itself implements many optimizations for multi-client reads and writes and can ensure linear consistency reading. However, now all read and write processing is performed using a single logical DLedger client, which will become a serious performance bottleneck in large-scale scenarios.</p>
<p>2. Optimization of DLedger features usage</p>
<p>DLedger itself can implement many optimizations, such as ReadIndex read and FollowerRead read. After implementation, we can fully leverage the performance of reads. Currently, all Broker nodes communicate with the Leader node of the Controller. In large-scale scenarios, this will cause the requests of each Controller group to be concentrated on the Leader node, and the other Follower nodes will not share the request processing of the Leader, which will cause single-point performance bottlenecks for the Leader.</p>
<p>3. Full asynchronous + parallel processing</p>
<p>Currently, DLedger itself is fully asynchronous, but on the Controller side, all requests for the DLedger side are synchronized, and many Controller-side operations are performed synchronously in a single thread, such as heartbeat checks and other timed tasks. In large-scale scenarios, the logic of these single-threaded synchronous operations will block a large number of requests from Broker-side, so asynchronous + parallel processing can be used for optimization.</p>
<p>4. Correctness testing and performance testing</p>
<p>After completing the above optimizations, it is necessary to conduct correctness testing on the new version and use distributed chaos testing frameworks such as OpenChaos to verify correct operation under fault scenarios such as network partition and random crashes.<br />
After completing the correctness testing, a detailed performance testing report can be produced by comparing the new and old versions.</p>
<p><strong>Skills Required</strong></p>
<ul>
<li>Strong interest in message middleware and distributed storage systems</li>
<li>Proficient in Java development</li>
<li>In-depth understanding of distributed consensus algorithms</li>
<li>In-depth understanding of the high-availability module of RockeetMQ and the DLedger library</li>
<li>Understanding of distributed chaos testing and performance testing.</li>
</ul></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-114">GSOC-114</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-114">[GSOC] [SkyWalking] Python Agent Performance Enhancement Plan</a></td>
<td></td>
<td></td>
<td></td>
<td><p>Apache SkyWalking is an application performance monitor tool for distributed systems, especially designed for microservices, cloud native and container-based (Kubernetes) architectures. This task is about enhancing Python agent performance, the tracking issue can be seen here -&lt; <a href="https://github.com/apache/skywalking/issues/10408">https://github.com/apache/skywalking/issues/10408</a></p>
<h4 id="mentor-15">Mentor</h4>
<ul>
<li>Mentor: Yihao Chen (Superskyyy), Apache SkyWalking PMC, <a href="mailto:yihaochen@apache.org">yihaochen@apache.org<sup></sup></a></li>
<li>Mentor: Zhenxu Ke, Apache SkyWalking PMC, <a href="mailto:kezhenxu94@apache.org">kezhenxu94@apache.org<sup></sup></a></li>
<li>Mailing List: dev@skywalking.apache.org</li>
</ul></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-111">GSOC-111</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-111">[GSoC][Beam] An IntelliJ plugin to develop Apache Beam pipelines and the Apache Beam SDKs</a></td>
<td></td>
<td></td>
<td></td>
<td>Beam library developers and Beam users would appreciate this : )<br>This project involves prototyping a few different solutions, so it will be large.</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-110">GSOC-110</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-110">GSoC: Support Logging exporter for metrics in RocketMQ</a></td>
<td></td>
<td></td>
<td></td>
<td><h3 id="apache-rocketmq-3">Apache RocketMQ</h3>
<p>Apache RocketMQ is a distributed messaging and streaming platform with low latency, high performance and reliability, trillion-level capacity and flexible scalability.</p>
<p><strong>Page</strong>: <a href="https://rocketmq.apache.org/">https://rocketmq.apache.org</a><br />
<strong>Github</strong>: <a href="https://github.com/apache/rocketmq">https://github.com/apache/rocketmq</a></p>
<h3 id="background-23">Background</h3>
<p>RocketMQ 5.0 supports metrics based on OpenTelemetry. However, typically metrics data needs to be collected by an OpenTelemetry Collector, in which case the OTLP metrics exporter is used. If there is no collector-based component, it is also possible to print the metrics data directly to logs, which makes troubleshooting problems more convenient.</p>
<h3 id="related-issue">Related Issue</h3>
<p><a href="https://github.com/apache/rocketmq/issues/5678">https://github.com/apache/rocketmq/issues/5678</a></p>
<h3 id="relevant-skills-16">Relevant Skills</h3>
<ol>
<li>Java language</li>
<li>Basic knowledge of CNCF OpenTelemetry</li>
</ol>
<h4 id="mentor-16">Mentor</h4>
<p>Yangkun Ai, PMC of Apache RocketMQ, <a href="mailto:aaronai@apache.org">aaronai@apache.org<sup></sup></a></p></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-108">GSOC-108</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-108">GSoC: Implement python client for RocketMQ 5.0</a></td>
<td></td>
<td></td>
<td></td>
<td><h3 id="apache-rocketmq-4">Apache RocketMQ</h3>
<p>Apache RocketMQ is a distributed messaging and streaming platform with low latency, high performance and reliability, trillion-level capacity and flexible scalability.</p>
<p>Page: <a href="https://rocketmq.apache.org">https://rocketmq.apache.org</a></p>
<h3 id="background-24">Background</h3>
<p>RocketMQ 5.0 has released various language clients including Java, CPP, and Golang, to cover all major programming languages, a Python client needs to be implemented.</p>
<p>Related Repo: <a href="https://github.com/apache/rocketmq-clients">https://github.com/apache/rocketmq-clients</a></p>
<h3 id="task-16">Task</h3>
<p>The developer is required to be familiar with the Java implementation and capable of developing a Python client, while ensuring consistent functionality and semantics.</p>
<p>Relevant Skills<br />
Python language<br />
Basic knowledge of RocketMQ 5.0</p>
<h3 id="mentor-17">Mentor</h3>
<p>Yangkun Ai, PMC of Apache RocketMQ, aaronai@apache.org</p></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-107">GSOC-107</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-107">[GSOC] [SkyWalking] AIOps Log clustering with Flink (Algorithm Optimization)</a></td>
<td></td>
<td></td>
<td></td>
<td><p>Apache SkyWalking is an application performance monitor tool for distributed systems, especially designed for microservices, cloud native and container-based (Kubernetes) architectures. This year we will proceed on log clustering implementation with a revised architecture and this task will require student to focus on algorithm optimiztion for the clustering technique.</p>
<h4 id="mentor-18">Mentor</h4>
<ul>
<li>Mentor: Sheng Wu, Apache SkyWalking PMC, <a href="mailto:wusheng@apache.org">wusheng@apache.org<sup></sup></a></li>
<li>Co-mentor: Yihao Chen (Superskyyy), Apache SkyWalking PMC, <a href="mailto:yihaochen@apache.org">yihaochen@apache.org<sup></sup></a></li>
<li>Mailing List: dev@skywalking.apache.org</li>
</ul></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-106">GSOC-106</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-106">[GSOC] [SkyWalking] AIOps Log clustering with Flink (Flink Integration)</a></td>
<td></td>
<td></td>
<td></td>
<td><p>Apache SkyWalking is an application performance monitor tool for distributed systems, especially designed for microservices, cloud native and container-based (Kubernetes) architectures. This year we will proceed on log clustering implementation with a revised architecture and this task will require student to focus on Flink and its integration with SkyWalking OAP.</p>
<h4 id="mentor-19">Mentor</h4>
<ul>
<li>Mentor: Yanlong He, Apache SkyWalking PMC, <a href="mailto:heyanlong@apache.org">heyanlong@apache.org<sup></sup></a></li>
<li>Co-mentor: Yihao Chen (Superskyyy), Apache SkyWalking PMC, <a href="mailto:yihaochen@apache.org">yihaochen@apache.org<sup></sup></a></li>
<li>Mailing List: dev@skywalking.apache.org</li>
</ul></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-105">GSOC-105</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-105">RocketMQ TieredStore Integration with High Availability Architecture</a></td>
<td></td>
<td></td>
<td></td>
<td><p><strong>Apache RocketMQ{</strong>}</p>
<p>Apache RocketMQ is a distributed messaging and streaming platform with low latency, high performance and reliability, trillion-level capacity and flexible scalability.</p>
<p>Page: <a href="https://rocketmq.apache.org/">https://rocketmq.apache.org</a></p>
<p><strong>Background</strong></p>
<p>With the official release of RocketMQ 5.1.0, tiered storage has arrived as a new independent module in the Technical Preview milestone. This allows users to unload messages from local disks to other cheaper storage, extending message retention time at a lower cost.</p>
<p>Reference RIP-57: <a href="https://github.com/apache/rocketmq/wiki/RIP-57-Tiered-storage-for-RocketMQ">https://github.com/apache/rocketmq/wiki/RIP-57-Tiered-storage-for-RocketMQ</a></p>
<p>In addition, RocketMQ introduced a new high availability architecture in version 5.0.</p>
<p>Reference RIP-44: <a href="https://github.com/apache/rocketmq/wiki/RIP-44-Support-DLedger-Controller">https://github.com/apache/rocketmq/wiki/RIP-44-Support-DLedger-Controller</a></p>
<p>However, currently RocketMQ tiered storage only supports single replicas.</p>
<p><strong>Task</strong></p>
<p>Currently, tiered storage only supports single replicas, and there are still the following issues in the integration with the high availability architecture:</p>
<ul>
<li>Metadata synchronization: how to reliably synchronize metadata between master and slave nodes.</li>
<li>Disallowing message uploads beyond the confirm offset: to avoid message rollback, the maximum uploaded offset cannot exceed the confirm offset.</li>
<li>Starting multi-tier storage upload when the slave changes to master, and stopping tiered storage upload when the master becomes the slave: only the master node has write and delete permissions, and after the slave node is promoted, it needs to quickly resume tiered storage breakpoint resumption.</li>
<li>Design of slave pull protocol: how a newly launched empty slave can properly synchronize data through the tiered storage architecture. (If synchronization is performed based on the first or last file, resumption of breakpoints may not be possible when switching again).</li>
</ul>
<p>So you need to provide a complete plan to solve the above issues and ultimately complete the integration of tiered storage and high availability architecture, while verifying it through the existing tiered storage file version and OpenChaos testing.</p>
<p><strong>Relevant Skills</strong></p>
<ul>
<li>Interest in messaging middleware and distributed storage systems</li>
<li>Java development skills</li>
<li>Having a good understanding of RocketMQ tiered storage and high availability architecture</li>
</ul></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-103">GSOC-103</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-103">[GSoC][Beam] Build out Beam Machine Learning Use Cases</a></td>
<td></td>
<td></td>
<td></td>
<td>Today, you can do all sorts of Machine Learning using Apache Beam (<a href="https://beam.apache.org/documentation/ml/overview/">https://beam.apache.org/documentation/ml/overview/</a>).<br><br>Many of our users, however, have a hard time getting started with ML and understanding how Beam can be applied to their day to day work. The goal of this project is to build out a series of Beam pipelines as Jupyter Notebooks demonstrating real world ML use cases, from NLP to image recognition to using large language models. As you go, there may be bugs or friction points as well which will provide opportunities to contribute back to Beam's core ML libraries.<br>Mentor for this will be Danny McCormick</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-100">GSOC-100</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-100">GSOC: Varnish Cache support in Apache Traffic Control</a></td>
<td></td>
<td></td>
<td></td>
<td><p><strong>Background</strong><br />
Apache Traffic Control is a Content Delivery Network (CDN) control plane for large scale content distribution.</p>
<p>Traffic Control currently requires Apache Traffic Server as the underlying cache. Help us expand the scope by integrating with the very popular Varnish Cache.</p>
<p>There are multiple aspects to this project:</p>
<ul>
<li>Configuration Generation: Write software to build Varnish configuration files (VCL). This code will be implemented in our Traffic Ops and cache client side utilities, both written in Go.</li>
</ul>
<ul>
<li>Health Monitoring: Implement monitoring of the Varnish cache health and performance. This code will run both in the Traffic Monitor component and within Varnish. Traffic Monitor is written in Go and Varnish is written in C.</li>
</ul>
<ul>
<li>Testing: Adding automated tests for new code</li>
</ul>
<p><strong>Skills:</strong></p>
<ul>
<li>Proficiency in Go is required</li>
<li>A basic knowledge of HTTP and caching is preferred, but not required for this project.</li>
</ul></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-98">GSOC-98</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-98">Apache ShenYu Gsoc 2023 - Design and implement shenyu ingress-controller in k8s</a></td>
<td></td>
<td></td>
<td></td>
<td><h3 id="background-25">Background</h3>
<p>Apache ShenYu is a Java native API Gateway for service proxy, protocol conversion and API governance. Currently, ShenYu has good usability and performance in microservice scenarios. However, ShenYu's support for Kubernetes is still relatively weak.</p>
<h3 id="tasks-3">Tasks</h3>
<p>1. Discuss with mentors, and complete the requirements design and technical design of shenyu-ingress-controller.<br />
2. Complete the initial version of shenyu-ingress-controller, implement the reconcile of k8s ingress api, and make ShenYu as the ingress gateway of k8s.<br />
3. Complete the ci test of shenyu-ingress-controller, verify the correctness of the code.</p>
<h3 id="relevant-skills-17">Relevant Skills</h3>
<p>1. Know the use of Apache ShenYu<br />
2. Familiar with Java and Golang<br />
3. Familiar with Kubernetes and can use java or golang to develop Kubernetes Controller</p>
<h3 id="description">Description</h3>
<p>Issues ： <a href="https://github.com/apache/shenyu/issues/4438">https://github.com/apache/shenyu/issues/4438</a><br />
website ： <a href="https://shenyu.apache.org/">https://shenyu.apache.org/</a></p></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-93">GSOC-93</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-93">CloudStack GSoC 2023 - Extend Import-Export Instances to the KVM Hypervisor</a></td>
<td></td>
<td></td>
<td></td>
<td><p>Github issue: <a href="https://github.com/apache/cloudstack/issues/7127">https://github.com/apache/cloudstack/issues/7127</a></p>
<p>Description:</p>
<p>The Import-Export functionality is only allowed for the Vmware hypervisor. The functionality is developed within a VM ingestion framework that allows the extension to other hypervisors. The Import-Export functionality consists on few APIs and the UI to interact with them:</p>
<ul>
<li>listUnmanagedInstances: Lists unmanaged virtual machines (not existing in CloudStack but existing on the hypervisor side)</li>
<li>importUnmanagedInstance: Import an unmanaged VM into CloudStack (this implies populating the database with the corresponding data)</li>
<li>unmanageVirtualMachine: Make CloudStack forget a VM but do not remove it on the hypervisor side</li>
</ul>
<p>The complexity on KVM should be parsing the existing XML domains into different resources and map them in CloudStack to populate the database correctly.</p></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-61">GSOC-61</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-61">Apache ShenYu Gsoc 2023 - Support for Kubernetes Service Discovery</a></td>
<td></td>
<td></td>
<td></td>
<td><strong>Background</strong><br>Apache ShenYu is a Java native API Gateway for service proxy, protocol conversion and API governance. Currently, ShenYu has good usability and performance in microservice scenarios. However, ShenYu's support for Kubernetes is still relatively weak.<br><strong>Tasks</strong><br>1. Support the registration of microservices deployed in K8s Pod to shenyu-admin and use K8s as the register center.<br>2. Discuss with mentors, and complete the requirements design and technical design of Shenyu K8s Register Center.<br>3. Complete the initial version of Shenyu K8s Register Center.<br>4. Complete the CI test of Shenyu K8s Register Center, verify the correctness of the code.<br>5. Write the necessary documentation, deployment guides, and instructions for users to connect microservices running inside the K8s Pod to ShenYu<br><strong>Relevant Skills</strong><br>1. Know the use of Apache ShenYu, especially the register center<br>2. Familiar with Java and Golang<br>3. Familiar with Kubernetes and can use Java or Golang to develop</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-42">GSOC-42</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-42">Apache EventMesh: Integrate eventmesh runtime on Kubernetes</a></td>
<td></td>
<td></td>
<td></td>
<td><strong>Apache EventMesh (incubating)</strong><br>Apache EventMesh is a fully serverless platform used to build distributed event-driven applications.<br>Website: <a href="https://eventmesh.apache.org/">https://eventmesh.apache.org</a><br>GitHub: <a href="https://github.com/apache/incubator-eventmesh">https://github.com/apache/incubator-eventmesh</a><br>Upstream Issue: <a href="https://github.com/apache/incubator-eventmesh/issues/3327">https://github.com/apache/incubator-eventmesh/issues/3327</a><br><strong>Background</strong><br>Currently, EventMesh has good usability in microservice scenarios. However, EventMesh's support for Kubernetes is still relatively weak.We hope the community can contribute EventMesh integration with the k8s.<br><strong>Task</strong><br>1.Discuss with the mentors your implementation idea<br>2. Learn the details of the Apache EventMesh project<br>3. Integrate EventMesh with the k8s<br><strong>Recommended Skills</strong><br>1.Familiar with Java<br>2.Familiar with Kubernetes<br><strong>Mentor</strong><br>Eason Chen, PPMC of Apache EventMesh, <a href="https://github.com/qqeasonchen">https://github.com/qqeasonchen</a>, chenguangsheng@apache.org<br>Mike Xue, PPMC of Apache EventMesh, <a href="https://github.com/xwm1992">https://github.com/xwm1992</a>, mikexue@apache.org</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-33">GSOC-33</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-33">Apache ShenYu Gsoc 2023 - Shenyu-Admin Internationalization</a></td>
<td></td>
<td></td>
<td></td>
<td><h3 id="background-26">Background</h3>
<p>Shenyu is a native API gateway for service proxy, protocol translation and API governance. It can manage and maintain the API through Shenyu-admin, and support internationalization in Chinese and English. Unfortunately, Shenyu-admin is only internationalized on the front end. The message prompt returned by the back-end interface is still in English. Therefore, we need to implement internationalization support for the back-end interface.This will lay a good foundation for shenyu to move towards more language support.</p>
<h3 id="relevant-skills-18">Relevant skills</h3>
<ul>
<li>Related skills spring resources</li>
<li>Spring Internationalization</li>
<li>Front-end react framework</li>
</ul>
<h3 id="api-reference">API reference</h3>
```
java.util.Locale;
org.springframework.context.MessageSource;
org.springframework.context.support.ResourceBundleMessageSource; 
```
<h3 id="interface-effect-example">Interface effect example</h3>
```
## zh request example
POST http://localhost:9095/plugin
Content-Type: application/json
Location: cn-zh
X-Access-Token: xxx
{
  "name": "test-create-plugin",
  "role": "test-create-plugin",
  "enabled": true,
  "sort": 100
}
Respone
{
  "code": 600,
  "message": "未登录"
}

### en request example
POST http://localhost:9095/plugin
Content-Type: application/json
Location: en
X-Access-Token: xxx
{
  "name": "test-create-plugin",
  "role": "test-create-plugin",
  "enabled": true,
  "sort": 100
}
Respone
{
  "code": 600,
  "message": "token is error"
} 
```
<h3 id="task-list-2">Task List</h3>
<ul>
<li>The task discussed with the tutor how to achieve the internationalization of shenyu-admin background</li>
<li>Some prompt message translation</li>
<li>Get through the internationalization of front-end, obtain the client region information through http protocol, support the language of the corresponding region.</li>
<li>Leave the extension of other multi-language internationalization support interface, so as to facilitate the localization transformation of subsequent users.</li>
</ul></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-32">GSOC-32</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-32">Apache EventMesh: Support source/sink connectors on EventMesh</a></td>
<td></td>
<td></td>
<td></td>
<td><strong>Apache EventMesh (incubating)</strong><br>Apache EventMesh is a fully serverless platform used to build distributed event-driven applications.<br>Website: <a href="https://eventmesh.apache.org/">https://eventmesh.apache.org</a><br>GitHub: <a href="https://github.com/apache/incubator-eventmesh">https://github.com/apache/incubator-eventmesh</a><br>Upstream Issue: <a href="https://github.com/apache/incubator-eventmesh/issues/3492">https://github.com/apache/incubator-eventmesh/issues/3492</a><br><strong>Background</strong><br>Through eventmesh's source/sink connector, we can connect data to heterogeneous data storage, we hope that the community can provide source/sink connector capabilities, such as connecting rocketmq data to different rocketmq clusters or kafka clusters<br><strong>Task</strong><br>1. Discuss with the mentors what you need to do<br>2. Learn the details of the Apache EventMesh project<br>3. Implement one of the source/sink connector based on the above background<br><strong>Recommended Skills</strong><br>1. Familiar with Java<br>2. Familiar with MQ is better<br><strong>Mentor</strong><br>Eason Chen, PPMC of Apache EventMesh, <a href="https://github.com/qqeasonchen">https://github.com/qqeasonchen</a>, chenguangsheng@apache.org<br>Mike Xue, PPMC of Apache EventMesh, <a href="https://github.com/xwm1992">https://github.com/xwm1992</a>, mikexue@apache.org</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GSOC-31">GSOC-31</a></td>
<td><a href="https://issues.apache.org/jira/browse/GSOC-31">[GSoC] RocketMQ TieredStore Integration with HDFS</a></td>
<td></td>
<td></td>
<td></td>
<td><h3 id="gsoc-rocketmq-tieredstore-integration-with-hdfs">[GSoC] RocketMQ TieredStore Integration with HDFS</h3>
<p>Github Issue: <a href="https://github.com/apache/rocketmq/issues/6282">https://github.com/apache/rocketmq/issues/6282</a></p>
<h4 id="apache-rocketmq-and-hdfs">Apache RocketMQ and HDFS</h4>
<ul>
<li>Apache RocketMQ is a cloud native messaging and streaming platform, making it simple to build event-driven applications.</li>
</ul>
<ul>
<li>Hadoop Distributed File System (HDFS) is a distributed file system designed to store and manage large data sets across multiple servers or clusters. HDFS provides a reliable, scalable, and fault-tolerant platform for storing and accessing data that can be accessed by a variety of applications running on the hadoop cluster.</li>
</ul>
<h4 id="background-27">Background</h4>
<p>High-speed storage media, such as solid-state drives (SSDs), are typically more expensive than traditional hard disk drives (HDDs). To minimize storage costs, the local data disk size of a rocketmq broker is often limited. HDFS can store large amounts of data at a lower cost, it has better support for storing and retrieving data sequentially rather than randomly. In order to preserve message data over a long period or facilitate message export, the RocketMQ project previously introduced a tiered storage plugin. Now it is necessary to implement a storage plugin to save data on hdfs.</p>
<h4 id="relevant-skills-19">Relevant Skills</h4>
<ul>
<li>Interest in messging middleware and distributed storage system</li>
</ul>
<ul>
<li>Java development skills</li>
</ul>
<ul>
<li>Having a good understanding of rocketmq and hdfs models</li>
</ul>
<p>Anyways, the most important relevant skill is motivation and readiness to learn during the project!</p>
<h4 id="tasks-4">Tasks</h4>
<ul>
<li>understand the basic concepts and principles in distributed systems</li>
</ul>
<ul>
<li>provide related design documents</li>
</ul>
<ul>
<li>develop one that uses hdfs as the backend storage plugin to store rocketmq message data</li>
</ul>
<ul>
<li>write effective unit test code</li>
</ul>
<ul>
<li>*suggest improvements to the tiered storage interface</li>
</ul>
<ul>
<li>*what ever comes in your mind further ideas are always welcome</li>
</ul>
<h4 id="learning-material-6">Learning Material</h4>
<ul>
<li>RocketMQ HomePage (<a href="https://rocketmq.apache.org/">https://rocketmq.apache.org</a>) <strong>Github</strong>: <a href="https://github.com/apache/rocketmq">https://github.com/apache/rocketmq</a></li>
</ul>
<ul>
<li>RocketMQ Tiered Storage Design (<a href="https://github.com/apache/rocketmq/wiki/RIP-57-Tiered-storage-for-RocketMQ">https://github.com/apache/rocketmq/wiki/RIP-57-Tiered-storage-for-RocketMQ</a>)</li>
</ul>
<ul>
<li>HDFS HomePage (<a href="https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsUserGuide.html">https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsUserGuide.html</a>)</li>
</ul>
<h4 id="name-and-contact-information-3">Name and contact information</h4>
<ul>
<li>Mentor: Zhimin Li, Apache RocketMQ Committer, <a href="mailto:lizhimin@apache.org">lizhimin@apache.org<sup></sup></a></li>
</ul>
<ul>
<li>Mailing List: <a href="mailto:dev@rocketmq.apache.org">dev@rocketmq.apache.org<sup></sup></a></li>
</ul>
<ul>
<li>Website: <a href="https://rocketmq.apache.org/">https://rocketmq.apache.org/</a> and <a href="https://hadoop.apache.org/">https://hadoop.apache.org/</a></li>
</ul></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GORA-709">GORA-709</a></td>
<td><a href="https://issues.apache.org/jira/browse/GORA-709">GSoC/Outreachy Project Idea</a></td>
<td></td>
<td></td>
<td></td>
<td>I would like to propose a project idea suitable for GSoC and Outreachy comprises of following sub tasks.<br>1. Complete rest of unfinished work on Geode module - <a href="https://issues.apache.org/jira/browse/GORA-698">https://issues.apache.org/jira/browse/GORA-698</a><br>2. Upgrade Hadoop version - <a href="https://issues.apache.org/jira/browse/GORA-537">https://issues.apache.org/jira/browse/GORA-537</a><br>We could scope out the project adding / removing sub tasks based on the available capacity of the student and project.</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/GORA-708">GORA-708</a></td>
<td><a href="https://issues.apache.org/jira/browse/GORA-708">GSoC/Outreachy Project Idea</a></td>
<td></td>
<td></td>
<td></td>
<td>I would like to propose a project idea suitable for GSoC and Outreachy comprises of following sub tasks.<br>1. Complete rest of unfinished work on ArangoDB module - <a href="https://issues.apache.org/jira/browse/GORA-650">https://issues.apache.org/jira/browse/GORA-650</a><br>2. Upgrade HBase driver - <a href="https://issues.apache.org/jira/browse/GORA-706">https://issues.apache.org/jira/browse/GORA-706</a><br>3. Upgrade Hive driver - <a href="https://issues.apache.org/jira/browse/GORA-707">https://issues.apache.org/jira/browse/GORA-707</a><br>We could scope out the project adding / removing sub tasks based on the available capacity of the student and project.</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/FINERACT-1586">FINERACT-1586</a></td>
<td><a href="https://issues.apache.org/jira/browse/FINERACT-1586">Reduce Boilerplate Code by Introducing lombok to Reduce getters/setters and Mapstruct to map REST DTO to Entity Objects</a></td>
<td></td>
<td></td>
<td></td>
<td><p>Lombok could help us to not only reduce a large amount of code, but also to fix a couple of inconsistencies in the code base:</p>
<ul>
<li>getters/setters with non-standard characters (e. g. underscores)</li>
</ul>
<ul>
<li>getters/setters with typos</li>
</ul>
<p>The layered architecture of Fineract requires mapping between REST DTO classes and internal entity classes. The current code base contains various strategies to achieve this:</p>
<ul>
<li>private functions</li>
</ul>
<ul>
<li>static functions</li>
</ul>
<ul>
<li>mapping classes</li>
</ul>
<p>All of these approaches are very manual (and error prone) and difficult to maintain. Mapstruct can help here:</p>
<ul>
<li>throw errors at compile time (missing new attributes, type changes etc.)</li>
</ul>
<ul>
<li>one common concept (easier to understand)</li>
</ul>
<ul>
<li>reduce manually maintained code and replace mostly generated code</li>
</ul>
<p>Challenges:</p>
<ul>
<li>maintain immutability (especially in DTO classes)</li>
</ul>
<ul>
<li>should we fluent builder pattern?</li>
</ul>
<ul>
<li>backwards compatibility</li>
</ul>
<ul>
<li>these improvements cannot be introduced as one pull request, but have to be split up at least at the “module” level (clients, loans, accounts etc.). This would result in approximately 30 pull requests; if we split up Lombok and Mapstruct then it would be 30 PRs each (=60); we would need this fine grained approach to make a transition as painless as possible</li>
</ul>
<ul>
<li>some classes are maybe beyond repair (e. g. Loan.java with 6000 lines of code, the smaller part getters/setters and a long list of utility/business logic functions)</li>
</ul></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-135">DUBBO-135</a></td>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-135">Dubbo GSoC - Pixiu supports gRPC/dubbo protocol with WASM plug-in</a></td>
<td></td>
<td></td>
<td></td>
<td>Pixiu acts as a gateway, forwarding traffic to various services.<br>Pixiu needs to support communication between different applications on the browser, and WASM needs to be supported on the browser. Currently, it only supports the HTTP protocol.<br>This project needs to complete the communication protocol below WASM (gRPC is preferred)<br>1. Support gRPC protocol<br>2. Support dubbo protocol<br>The front end calls gRPC reference <a href="https://github.com/grpc/grpc-web">https://github.com/grpc/grpc-web</a></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-134">DUBBO-134</a></td>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-134">Dubbo GSoC 2023 - Automatically configure pixiu as istio ingress gateway</a></td>
<td></td>
<td></td>
<td></td>
<td>In the istio mesh environment, the public dubbo/dubbo go provider can be exposed outside the cluster through the http/https protocol through the istio ingress gateway. This requires the ingress gateway to complete the conversion from http to dubbo protocol, which is the main scenario of pixiu; this project Need to complete:<br>1. Customize pixiu, which can be used as an istio ingress gateway, proxy http/https requests and convert them into dubbo requests;<br>2. The gateway supports basic user authentication methods.<br>Basic reference: <a href="https://istio.io/latest/blog/2019/custom-ingress-gateway/">https://istio.io/latest/blog/2019/custom-ingress-gateway/</a><br><a href="https://cloud.ibm.com/docs/containers?topic=containers-istio-custom-gateway">https://cloud.ibm.com/docs/containers?topic=containers-istio-custom-gateway</a></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-133">DUBBO-133</a></td>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-133">Dubbo GSoC 2023 - Dubbo3 Python HTTP/2 RPC Protocol Implementation</a></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-132">DUBBO-132</a></td>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-132">Dubbo GSoC 2023 - Rust Cluster Feature Implementation and Stability Improvement.</a></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-131">DUBBO-131</a></td>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-131">Dubbo GSoC 2023 - Dubbo3 Node.js HTTP/2 RPC Protocol Implementation</a></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-130">DUBBO-130</a></td>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-130">Dubbo GSoC 2023 - Development of Dubbo Admin Dashboard UI Pages</a></td>
<td></td>
<td></td>
<td></td>
<td>In charge of the maintenance of the development of the UI pages of the whole Dubbo Admin project.</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-129">DUBBO-129</a></td>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-129">Dubbo GSoC 2023 - Admin Control Plane</a></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-128">DUBBO-128</a></td>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-128">Dubbo GSoC 2023 - Go Observability Improvement</a></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-127">DUBBO-127</a></td>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-127">Dubbo GSoC 2023 - Improve usability of Dubbo-go project</a></td>
<td></td>
<td></td>
<td></td>
<td>Including but not limited to programming patterns, configuration, apis, documentation and demos.</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-126">DUBBO-126</a></td>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-126">Dubbo GSoC 2023 - Go Web Protocol and Programming Support</a></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-125">DUBBO-125</a></td>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-125">Dubbo GSoC 2023 - Go HTTP1&amp;2 RPC Protocol Support</a></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-124">DUBBO-124</a></td>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-124">Dubbo GSoC 2023 - Go Security</a></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-123">DUBBO-123</a></td>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-123">Dubbo GSoC 2023 - Go Traffic Management</a></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-122">DUBBO-122</a></td>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-122">Dubbo GSoC 2023 - Service Deployer</a></td>
<td></td>
<td></td>
<td></td>
<td>For a large number of monolithic applications, problems such as performance will be encountered during large-scale deployment. For interface-oriented programming languages, Dubbo provides the capability of RPC remote calls, and we can help applications decouple through interfaces. Therefore, we can provide a deployer to help users realize the decoupling and splitting of microservices during deployment, and quickly provide performance optimization capabilities.</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-121">DUBBO-121</a></td>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-121">Dubbo GSoC 2023 - API manager</a></td>
<td></td>
<td></td>
<td></td>
<td>Since Dubbo runs on a distributed architecture, it naturally has the problem of difficult API interface definition management. It is often difficult for us to know which interface is running in the production environment. So we can provide an API-defined reporting platform, and even a management platform. This platform can automatically collect all APIs of the cluster, or can be directly defined by the user, and then unified distribution management is carried out through a mechanism similar to git and maven package management.</td>
</tr>
<tr>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-120">DUBBO-120</a></td>
<td><a href="https://issues.apache.org/jira/browse/DUBBO-120">Dubbo GSoC 2023 - JSON compatibility check</a></td>
<td></td>
<td></td>
<td></td>
<td>Dubbo currently supports a large number of Java language features through hessian under the Java SDK, such as generics, interfaces, etc. These capabilities will not be compatible when calling across systems. Therefore, Dubbo needs to provide the ability to detect the interface definition and determine whether the interface published by the user can be described by native json.</td>
</tr>
</tbody>
</table>

Showing 100 out of [132 issues](https://issues.apache.org/jira/secure/IssueNavigator.jspa)
